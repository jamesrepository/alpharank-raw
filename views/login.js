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
					$(".message").hide();
					$(".message").html("<span>" + response.error_message + "</span>");
					$(".message").show("slow");
					setTimeout(function(){
						$(".message").hide("slow");
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
		        <p className="clearfix"><a className="fp-left" href="/signup">Forgot password?</a><span className="signup-right">Don't have an account? <a href="#">Sign up</a></span> </p>
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