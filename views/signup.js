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
		        	<span className="input input--hoshi">
		            <input className="input__field input__field--hoshi" type="text" name="first_name" id="first_name" required/>
		            <label className="input__label input__label--hoshi input__label--hoshi-color-1" for="first_name">
		              <span className="input__label-content input__label-content--hoshi">First Name</span>
		            </label>
		          </span>
		          <span className="input input--hoshi">
		            <input className="input__field input__field--hoshi" type="text" name="last_name" id="last_name" required/>
		            <label className="input__label input__label--hoshi input__label--hoshi-color-1" for="last_name">
		              <span className="input__label-content input__label-content--hoshi">Last Name</span>
		            </label>
		          </span>
		          <span className="input input--hoshi">
		            <input className="input__field input__field--hoshi" type="text" name="email" id="email" required/>
		            <label className="input__label input__label--hoshi input__label--hoshi-color-1" for="email">
		              <span className="input__label-content input__label-content--hoshi">Email</span>
		            </label>
		          </span>
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
		          <span className="input input--hoshi">
		            <input className="input__field input__field--hoshi" type="text" name="confirm" id="confirm" required/>
		            <label className="input__label input__label--hoshi input__label--hoshi-color-1" for="confirm">
		              <span className="input__label-content input__label-content--hoshi">Confirm Password</span>
		            </label>
		          </span>
		          <div className="input-group form-submit">
		            <input type="submit" className="bround" value="SIGNUP" />
		          </div>
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