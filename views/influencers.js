var Filters = React.createClass({
	render(){
		return(
			<div className="app-filter-cont">
                <form>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="filter-box">
                        <h3 className="filter-title">Location</h3>
                        <div className="checkbox-cont">
                            <input id='zipOne' type='checkbox' />
                            <label for='zipOne'>
                              <span></span>
                              90001
                              <ins><i>90001</i></ins>
                            </label>
                        </div>
                        <div className="checkbox-cont">
                            <input id='zip1' type='checkbox' />
                            <label for='zip1'>
                              <span></span>
                              90124
                              <ins><i>90124</i></ins>
                            </label>
                        </div>
                        <div className="checkbox-cont">
                            <input id='zip2' type='checkbox' />
                            <label for='zip2'>
                              <span></span>
                              9004
                              <ins><i>9004</i></ins>
                            </label>
                        </div>
                        <div className="checkbox-cont">
                            <input id='zip3' type='checkbox' />
                            <label for='zip3'>
                              <span></span>
                              9011
                              <ins><i>9011</i></ins>
                            </label>
                        </div>
                        <div className="checkbox-cont">
                            <input id='zip4' type='checkbox' />
                            <label for='zip4'>
                              <span></span>
                              9016
                              <ins><i>9016</i></ins>
                            </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="filter-box">
                        <h3 className="filter-title">Gender</h3>
                        <div className="checkbox-cont">
                            <input id='male' type='checkbox' />
                            <label for='male'>
                              <span></span>
                              Male
                              <ins><i>Male</i></ins>
                            </label>
                        </div>
                        <div className="checkbox-cont">
                            <input id='female' type='checkbox' />
                            <label for='female'>
                              <span></span>
                              Female
                              <ins><i>Female</i></ins>
                            </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
		)
	}
})
var Influencers = React.createClass({
	getInitialState(){
		return({
			influencers: [{
				first_name: 'Kelly',
				last_name: 'Neri',
				email: 'drnneri27@gmail.com',
				username: 'keliMeSoftly',
				value: 2000,
				img_url: "",
				no_of_influence: 30
			},
			{
				first_name: 'Adrian',
				last_name: 'Neri',
				email: 'zkaneri.alpharank@gmail.com',
				username: 'iDevKelly',
				value: 500,
				img_url: "",
				no_of_influence: 300
			},
			{
				first_name: 'Yoela',
				last_name: 'Palkin',
				email: 'yoela.palkin@alpharank.com',
				username: 'yoelapalkin',
				value: 20000,
				img_url: "",
				no_of_influence: 2000
			},
			{
				first_name: 'John',
				last_name: 'Doe',
				email: 'hello@yahoo.com',
				username: 'rt84w0fhdsofjdsf',
				value: 20000,
				img_url: "",
				no_of_influence: 2000
			}],
			twitter: [],
			facebook: [],
			instagram: []
		})
	},
	getTwitter(username){
		$.get("/twitter/" + username, function(result){
			if(result.length !== 0){
				this.state.twitter.push(result)
			}
		}.bind(this));
	},
	displayTwitter(){
		console.log(this.state.twitter)
	},
	render(){
		var parent = this
		return (
			<div className="container">
				<h1 className="wh1-title">Influencers Match By Social Media</h1>
	            <div className="app-cont">
		            <ul className="nav nav-tabs" role="tablist">
		            	<li role="presentation" className="active nt-facebook"><a href="#facebook" aria-controls="home" role="tab" data-toggle="tab"><i className="fa fa-facebook-square"></i> Facebook</a><span className="i-notification">99</span></li>
		            	<li role="presentation" className="nt-twitter" onClick={this.displayTwitter}><a href="#twitter" aria-controls="twitter" role="tab" data-toggle="tab" onClick={this.getTwitter}><i className="fa fa-twitter-square"></i> Twitter</a><span className="i-notification">101</span></li>
		            	<li role="presentation" className="nt-instagram"><a href="#instagram" aria-controls="instagram" role="tab" data-toggle="tab"><i className="fa fa-instagram"></i> Instagram</a><span className="i-notification">399</span></li>
		            </ul>
		            <Filters/>
					<div className="tab-content">

						<div role="tabpanel" className="tab-pane active">
		            	<div className="influenced-wrap">
						  <div className="socialm-box">
						    <h2 className="socialm-title">Influencers List</h2>
						  </div>
						  <div className="row">
		            		{this.state.influencers.map(function(influencer){
		            			parent.getTwitter(influencer.username)
		            			return(
		            				<div className="col-xs-6 col-sm-3">
								      <div className="influenced">
								        <div className="i-image i-twitter">
								          <img src={influencer.img_url} alt=""/>
								        </div>
								        <span className="i-name">{influencer.first_name} {influencer.last_name}</span>
								        <div className="i-details">
								          <span>@{influencer.username}</span>
								        </div>
								        <div className="i-value-cont clearfix">
								          <div className="i-value-box fleft">
								            <span className="i-value-title">Influenced</span>
								            <i>{influencer.no_of_influence}</i>
								          </div>
								          <div className="i-value-box fright">
								            <span className="i-value-title">Value</span>
								            <i>${influencer.value}</i>
								          </div>
								        </div>

								      </div>
								    </div>
		            			)
		            		})}
		            			</div>
		            		</div>
		            	</div>

		            	<div role="tabpanel" className="tab-pane" id="facebook">
		                
		            	</div>

		            	<div role="tabpanel" className="tab-pane" id="twitter">
		            	<div className="influenced-wrap">
						  <div className="socialm-box">
						    <h2 className="socialm-title">Twitter Match</h2>
						  </div>
						  <div className="row">
		            		{this.state.twitter.map(function(influencer){
		            			return(
		            				<div className="col-xs-6 col-sm-3">
								      <div className="influenced">
								        <div className="i-image i-twitter">
								          <img src="images/80Q5wAFU.jpg" alt=""/>
								        </div>
								        <span className="i-name">Kelly Neri</span>
								        <div className="i-details">
								          <span>@keliMeSoftly</span>
								        </div>
								        <div className="i-value-cont clearfix">
								          <div className="i-value-box fleft">
								            <span className="i-value-title">Influenced</span>
								            <i>129</i>
								          </div>
								          <div className="i-value-box fright">
								            <span className="i-value-title">Value</span>
								            <i>$2199</i>
								          </div>
								        </div>

								      </div>
								    </div>
		            			)
		            		})}
		            			</div>
		            		</div>
		            	</div>
		            	<div role="tabpanel" className="tab-pane" id="instagram">
		                 
		            	</div>
	              	</div>
              	</div>
             </div>
			)
		}
})

ReactDOM.render(
	<Influencers />, 
	document.getElementById('social')
)