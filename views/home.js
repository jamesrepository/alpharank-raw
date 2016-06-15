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
			    <Upload></Upload>
		    </div>
		)
	}
})
var Upload = React.createClass({
	handleSubmit(e){
		e.preventDefault();
		var file = e.target.csv_file.value;
		var tmppath = URL.createObjectURL(e.target.csv_file[0]);
		console.log(tmppath)
		$.ajax({
			url: "/upload_process",
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
			<section className="sect-user">
		      <div className="container">
		        <div className="row">
		          <div className="col-xs-12 col-md-2 col-lg-offset-2 col-lg-8 col-lg-offset-2">
		            <div className="upload-cont">
		                <div className="h-icon"><img className="upcloud" src="images/upcloud.png" alt="" /></div>
		                <h2>Upload Transactional Data Set</h2>
		                <div className="upload-content">
		                  <h3>Import data using CSV. Please double check if you have the following criteria before importing:</h3>
		                  <p>Make sure all the following required columns are filled in.</p>
		                  <ul className="dot-list">
		                    <li>CustomerID</li>
		                    <li>TransactionalTotal</li>
		                    <li>ProductID</li>
		                    <li>Product Category</li>
		                    <li>Timestamp</li>
		                  </ul>
		                  <form className="f-upload-csv" action="" name="upload-csv" method="post">
		                    <div className="input-group form-submit">
		                      <input type="file" name="file" id="file" className="inputfile" />
		                      <label className="filename" for="file"><i className="fa fa-file-text"></i><span>Choose a file</span></label>
		                      <input type="submit" className="bround" name="upload-btn" id="upload-btn" value="UPLOAD" />
		                    </div>
		                  </form>
		                </div>

		            </div>
		          </div>    
		        </div>
		      </div>
		    </section>
		)
	}
})

ReactDOM.render(
	<Home />,
	document.getElementById('root')
)