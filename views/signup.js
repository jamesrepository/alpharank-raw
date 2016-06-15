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
					window.location.href = "/verification"
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
			<div className="signup-wrap">
				<form className="signup-form" onSubmit={this.handleSubmit}>
					<input type="text" name="first_name" placeholder="First Name" />
					<input type="text" name="last_name" placeholder="Last Name" />
					<input type="text" name="email" placeholder="Email" />
					<input type="text" name="username" placeholder="Username" />
					<input type="password" name="password" placeholder="Password" />
					<input type="password" name="con_password" placeholder="Confirm Password" />
					<input type="submit" value="Sign Up" />
				</form>
				<div className="message">
				</div>
			</div>
		)
	}
})

ReactDOM.render(
	<Signup />,
	document.getElementById('root')
)