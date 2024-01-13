import React from 'react';


function YourProject() {
  return (
    <div className="start-project">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-6">
                        
                        <div className="start-project-text">

                            <h1>Start your project with appie.</h1>
                            <img className="start-project-img-hide" src="images/start-project-hide-img.png" alt="hide-img"/>
                            <p>We will email you only about this product.</p>
                            <form className="form-inline">
                                <div className="form-group mx-sm-3 mb-2">

                                    <input type="email" className="form-control form-control-2" id="inputemail"
                                        placeholder="Your email"autoComplete='off' required min={5}/>

                                    <button type="submit" className="btn btn-subs">Subscribe</button>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="start-project-img">
                            <img src="images/project-img.png" alt="project-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default YourProject