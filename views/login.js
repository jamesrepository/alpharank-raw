var Login = React.createClass({
	handleSubmit(e){
		e.preventDefault();
		var username = e.target.username.value;
		var password = e.target.password.value;
		var data = {
			username: username,
			password: password
		}
		console.log(username + "-" + password);
		$.ajax({
			url: "/login_process",
			method: 'POST',
			processData: true,
		    contentType: 'application/json; charset=utf-8',
		    dataType: 'json',
		    data: JSON.stringify(data),
			success: function(result){
				var response = JSON.parse(result.response)
				if(result.status === "error"){
					$(".message").html("<span style='display:none; color: red'>" + response.error_message + "</span>");
					$(".message span").show("slow");
					setTimeout(function(){
						$(".message span").hide("slow");
					}, 10000);					
				}
				else{
					window.location.href= "/home"
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
		          <span className="input input--hoshi">
		            <input className="input__field input__field--hoshi" type="text" name="username" id="username" required/>
		            <label className="input__label input__label--hoshi input__label--hoshi-color-1" for="username">
		              <span className="input__label-content input__label-content--hoshi">Username</span>
		            </label>
		          </span>
		          <span className="input input--hoshi">
		            <input className="input__field input__field--hoshi" type="password" name="password" id="password" required/>
		            <label className="input__label input__label--hoshi input__label--hoshi-color-1" for="password">
		              <span className="input__label-content input__label-content--hoshi">Password</span>
		            </label>
		          </span>
		          <div className="input-group">
		             <div className="rememberme-box">
		              <input type="checkbox" value="None" id="rememberme" name="check" checked />
		              <label for="rememberme">Keep me logged in</label>
		            </div>
		          </div>
		          <div className="input-group form-submit">
		            <input type="submit" className="bround" value="LOGIN" />
		          </div>
		        </form>
		        <p className="clearfix"><a className="fp-left" href="#">Forgot password?</a><span className="signup-right">Don't have an account? <a href="/signup">Sign up</a></span> </p>
		      	<div className="message">
				</div>
		      </div>
		    </div>
		)
	}
})

ReactDOM.render(
	<Login />,
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