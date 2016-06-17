var Home = React.createClass({
	render(){
		return(
			<div>
				<header className="header clearfix">
			        <nav>
			          <div className="container">
			            <div className="main-nav clearfix">
			              <h1 className="logo-cont">
			                <a href="/">
			                    <img src="images/alpharank_logo_white.svg" width="218" height="25" alt="AlphaRank Logo" />
			                </a>
			              </h1>
			              <ul>
			                  <li></li>
			              </ul>
			            </div>
			          </div>
			        </nav>
			    </header>
		    </div>
		)
	}
})

ReactDOM.render(
	<Home />,
	document.getElementById('root')
)