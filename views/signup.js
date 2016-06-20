var Signup = React.createClass({
	handleSubmit(e){
		e.preventDefault();
		var name = e.target.first_name.value;
		var surname = e.target.last_name.value
		var email = e.target.email.value;
		var username = e.target.username.value;
		var password = e.target.password.value;
		var data = {
			name: name,
			surname: surname,
			username: username,
			email: email,
			password: password
		}
		console.log(email + "-" + username);
		$.ajax({
			url: "/signup_process",
			method: 'POST',
			processData: true,
		    contentType: 'application/json; charset=utf-8',
		    dataType: 'json',
		    data: JSON.stringify(data),
			success: function(result){
				var response = JSON.parse(result.response)
				if(result.status === "error"){
					window.location.href = "/email_verification"
				}
				else{
					$(".message").hide();
					$(".message").html("<span>" + response.error_message + "</span>");
					$(".message").show("slow");
					setTimeout(function(){
						$(".message").hide("slow");
					}, 10000);	
				}
			}
		})
	},
	render(){
		return(
			<div className="page page-login">
		      <div className="lr-cont">
		        <div className="site-logo">
		            <h1><a href="/"><img src="images/alpharank_logo_white.svg" width="218" height="25" alt="AlphaRank Logo" /></a></h1>
		        </div>
		        <form id="lr-form" onSubmit={this.handleSubmit}>
				  <div className="row">
				   <div className="col-xs-12 col-xs-6">
				    <span className="input input--hoshi">
				    	<input type="text" className="input__field input__field--hoshi" name="first_name" id="first_name" required="" />
				    	<label className="input__label input__label--hoshi input__label--hoshi-color-1">
				    		<span className="input__label-content input__label-content--hoshi">First Name</span>
				    	</label>
				    </span>
				   </div>
				   <div className="col-xs-12 col-xs-6">
				  	<span className="input input--hoshi">
				  		<input type="text" className="input__field input__field--hoshi" name="last_name" id="last_name" required="" />
				  		<label className="input__label input__label--hoshi input__label--hoshi-color-1">
				  			<span className="input__label-content input__label-content--hoshi">Last Name</span>
				  		</label>
				  	</span>
				   </div>
				   <div className="col-xs-12">
					  <span className="input input--hoshi">
					  	<input type="text" className="input__field input__field--hoshi" name="email" id="email" required="" />
					  	<label className="input__label input__label--hoshi input__label--hoshi-color-1">
					  		<span className="input__label-content input__label-content--hoshi">Email</span>
					  	</label>
					  </span>
				   </div>
				   <div className="col-xs-12">
				  	<span className="input input--hoshi">
				  		<input type="text" className="input__field input__field--hoshi" name="username" id="username" required="" />
				  		<label className="input__label input__label--hoshi input__label--hoshi-color-1">
				  			<span className="input__label-content input__label-content--hoshi">Username</span>
				  		</label>
				  	</span>
				 </div>
				   <div className="col-xs-12">
				  	<span className="input input--hoshi">
				  		<input type="password" className="input__field input__field--hoshi" name="password" id="password" required="" />
				  		<label className="input__label input__label--hoshi input__label--hoshi-color-1">
				  			<span className="input__label-content input__label-content--hoshi">Password</span>
				  		</label>
				  	</span>
				 </div>
				   <div className="col-xs-12">
				  	<span className="input input--hoshi">
				  		<input type="password" className="input__field input__field--hoshi" name="confirm" id="confirm" required="" />
				  		<label className="input__label input__label--hoshi input__label--hoshi-color-1">
				  			<span className="input__label-content input__label-content--hoshi">Confirm Password</span>
				  		</label>
				  	</span>
				 </div>

				  </div>
				  
				 <div className="input-group form-submit"><input type="submit" className="bround" value="SIGNUP" /></div>
				</form>
		      	<div className="message">
				</div>
		      </div>
		    </div>
		)
	}
})

ReactDOM.render(
	<Signup />,
	document.getElementById('root')
)

$(function() {
        // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
        if (!String.prototype.trim) {
          (function() {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function() {
              return this.replace(rtrim, '');
            };
          })();
        }

        [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
          // in case the input is already filled..
          if( inputEl.value.trim() !== '' ) {
            classie.add( inputEl.parentNode, 'input--filled' );
          }

          // events:
          inputEl.addEventListener( 'focus', onInputFocus );
          inputEl.addEventListener( 'blur', onInputBlur );
        } );

        function onInputFocus( ev ) {
          classie.add( ev.target.parentNode, 'input--filled' );
        }

        function onInputBlur( ev ) {
          if( ev.target.value.trim() === '' ) {
            classie.remove( ev.target.parentNode, 'input--filled' );
          }
        }
      });