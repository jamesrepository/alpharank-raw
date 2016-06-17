var Influencers = React.createClass({
	getInitialState(){
		return({
			influencers: {}
		})
	},
	handleSearch(e){

	},
	render(){
		return(
			<div className="influencers-wrapper">
				<form action="">
	            <div className="form-group">
	              <input type="text" className="form-control search-box" placeholder="Search for influencers" onChange={this.handleSearch}/>
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
	                  <option>$1000</option>
	                  <option>$10, 000</option>
	                  <option>$100, 000</option>
	                </select>
	              </div>
	            </div>
	          </form>
          </div>
		)
	}
})

ReactDOM.render(<Influencers />, document.getElementById('root'))