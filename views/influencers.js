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
			}]
		})
	},
	render(){
		return(
			<div className="wrap">
			<div className="container">
				  <form action="">
		            <div className="form-group">
		              <input type="text" className="form-control search-box" placeholder="Search for influencers" />
		            </div>
		            <div className="row">
		              <div className="col-xs-12 col-md-3">
		                <select className="form-control">
		                  <option>Location</option>
		                  <option>USA</option>
		                  <option>Philippines</option>
		                  <option>Russia</option>
		                  <option>Japan</option>
		                </select>
		              </div>
		              <div className="col-xs-12 col-md-3">
		                <select className="form-control">
		                  <option>Gender</option>
		                  <option>Male</option>
		                  <option>Female</option>
		                </select>
		              </div>
		              <div className="col-xs-12 col-md-3">
		                <select className="form-control">
		                  <option>Value</option>
		                  <option value="1000">$1000</option>
		                  <option value="10000">$10, 000</option>
		                  <option value="100000">$100, 000</option>
		                </select>
		              </div>
		            </div>
		          </form>
		          <div className="influenced-wrap">
		            <div className="row">
		              {this.state.influencers.map(function(influencer){
		              	return(
		              		<div className="col-xs-6 col-sm-3">
				                <div className="influenced">
				                  <div className="i-image">
				                    <img src={influencer.img_url} alt="" />
				                  </div>
				                  <span className="i-name">{influencer.first_name} {influencer.last_name}</span>
				                  <div className="i-details">
				                    <span>@{influencer.username}</span><br/>
				                    <span><i className="fa fa-map"></i> No. of Influenced: {influencer.no_of_influence}</span>
				                  </div>
				                  <div className="social-accounts">
				                  	<Twitter username={influencer.username} />
				                  </div>
				                  <div className="i-value">
				                    <span className="value"><i className="indicator-value high"></i> ${influencer.value}</span>
				                  </div>
				                </div>
				              </div>
		              	)
		              })}
		            </div>
		          </div>
	          </div>
          </div>
		)
	}
})
var Twitter = React.createClass({
	render(){
		return(
			<div className="twitter-wrap">
				<div className="twitter"><a href={"https://twitter.com/" + this.props.username} target="_blank">Twitter</a></div>
			</div>
		)
	}
})
ReactDOM.render(
	<Influencers />, 
	document.getElementById('root')
)