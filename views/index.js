var Index = React.createClass({
	render(){
		return(
			<div className="index">
				<div className="main">
					<h1><a href="/">Alpharank</a></h1>
					<a href="/login">Login</a>
				</div>
				<div className="sub">
					<a href="/">View API Documentation</a>
					<a href="/signup">Sign Up</a>
				</div>
			</div>
		)
	}
})

ReactDOM.render(
	<Index></Index>,
	document.getElementById('root')
)