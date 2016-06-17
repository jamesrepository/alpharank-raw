var Download = React.createClass({
	render(){
		return(
			<div>
			<header className="header clearfix">
		        <nav>
		          <div className="container">
		            <div className="main-nav clearfix">
		              <h1 className="logo-cont">
		                <a href="index.html">
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

		    <section className="sect-user">
		        <div className="container">
		          <div className="row">
		            <div className="col-xs-12 col-lg-10 col-lg-offset-1">
		              <h2>Your File Is Ready</h2>
		              <p className="wmessage"><a href="#">Click Here</a> to download your file.</p>
		            </div>    
		          </div>
		        </div>
		      </section>
		    </div>
		)
	}
})

ReactDOM.render(<Download />, document.getElementById('root'))