import React from 'react';


function Overview() {
    const overviewimg = "Images/overview-img.png";
  return (
    
    <div className="overview-wrap">
    <div className="container">
        <div className="row">
            <div className="col-md-12 col-sm-12">
                <div className="overview-head">
                    <h2>OVERVIEW</h2>
                </div>
            </div>

            <div className="overview-progress-bartext">

                <ul className="overview-bar-head">
                    <div className="col-md-2 col-sm-2">
                        <li className="progress-bar-1">
                            <h3 className="progress-bar-h1">January <br></br> <span>32%</span></h3>

                            <div className="progress">
                                <div className="progress-bar progress-bar1 " role="progressbar" aria-valuenow="100"
                                    aria-valuemin="0" aria-valuemax="100" >
                                </div>
                            </div>

                        </li>
                    </div>
                    <div className="col-md-2 col-sm-2">

                        <li className="Overhead1">
                            <h3 className="progress-bar-h1">February <br></br> <span>15%</span></h3>
                            <div className="progress progress2">
                                <div className="progress-bar progress-bar2" role="progressbar" aria-valuenow="30"
                                    aria-valuemin="0" aria-valuemax="100" >

                                </div>
                            </div>
                        </li>
                    </div>
                    <div className="col-md-2 col-sm-2">

                        <li className="Overhead1">
                            <h3 className="progress-bar-h1">March <br></br><span>48%</span></h3>
                            <div className="progress progress3">
                                <div className="progress-bar progress-bar3" role="progressbar" aria-valuenow="60"
                                    aria-valuemin="0" aria-valuemax="100" >

                                </div>
                            </div>
                        </li>
                    </div>


                </ul>

            </div>



            <div class="overview-img">
            <img src={overviewimg} alt="Example" />
            </div>
        </div>


    </div>
</div>
  )
}

export default Overview