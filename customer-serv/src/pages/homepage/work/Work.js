import React from 'react'
function Work() {
   const img3="Images/working-img3.png";
   const img2="Images/working-ing2.png";
   const img1="Images/working img1.png"; 
   let paragraph="This section aims to establish a foundational understanding of the core concepts and theories that govern the subject matter.";
  return (
    <div className="working-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="working-heading">
                            <h2>HOW IT WORKS</h2>
                        </div>
                    </div>

                    <div className="working-sec-content">
                        <div className="col-md-4 col-sm-6">
                            <div className="working-text-1">
                                <h4>01</h4>
                                <h3>fundamental</h3>

                            </div>

                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="working-img">

                            <img src={img1} alt="Example" />

                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="working-text-p">
                                <p>{paragraph} </p>
                            </div>

                        </div>



                    </div>
                  

                    <div className="working-sec-content">
                        <div className="col-md-4 col-sm-6">
                            <div className="working-text-p">
                                <p>{paragraph} </p>
                            </div>


                        </div>

                        <div className="hide-working-text">
                            <h4>02</h4>
                            <h3> Interactions</h3>

                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="working-img">
                            <img src={img2} alt="Example" />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="working-text-1 hide-sec-2">
                                <h4>02</h4>
                                <h3> Interactions</h3>

                            </div>

                        </div>



                    </div>

                    
                    <div className="working-sec-content">
                        <div className="col-md-4 col-sm-6">
                            <div className="working-text-1">
                                <h4>03</h4>
                                <h3>conclusion</h3>

                            </div>

                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="working-img">
                            <img src={img3} alt="Example" />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="working-text-p">
                                <p>The conclusion briefly summarizes the key points discussed in the "How It Works"
                                    section.
                                    It reinforces the main takeaways and emphasizes.. </p>
                            </div>

                        </div>



                    </div>
                </div>



            </div>






        </div>
  )
}

export default Work