import React from 'react';


function Customer() {
  const chechkist = [
    {
      Text: "Free 14-day trial",
    },
    {
      Text: "Automation",
    },
    {
      Text: "Online Messaging",
    },
  ];
  let heading1 = "Customer Service ";
  let heading2 = " is The Face of Our Company";
  let paragraph =" Collaborate, manage projects, and reach new productivity peaks, From high rises to the home office, the way your team works.";

  return (
    




<div className="Customer-service-wraper">
            <div className="container">
                <div className="row ">
                    <div className="col-md-6">
                        <div className="customer-service-text ">
                            <h1><span>{heading1}</span>
                            {heading2}</h1>
                            <p>{paragraph}</p>

                        </div>
                        <div className="search-bar  mt-4 ">
                            <div className="col-md-8 col-sm-12">
                                <div className="search-icon ">
                                   <img src="/Images/gmail-icon.png" alt="gmail-icon"/>
                                     <input type="text" className="form-control  " placeholder="Enter your email address " /> 

                                    

                                </div>
                            </div>

                            <div class="col-md-4 col-sm-12">

                                <button class="btn search-btn ">Sign up Free</button>

                            </div>

                        </div>
                        <div class="checkbox">
                            <div class="col-md-12 col-sm-12 my-5">
                                
                                    <div class="checkbox-list ">
                                    <ul>
                  {chechkist.map(({ Text }, index) => {
                    return (
                      <ul key={index}>
                        <li>
                          {
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none">
                              <path
                                d="M9.23045 17.7247C9.17739 17.7247 9.12492 17.7137 9.07631 17.6924C9.02771 17.6712 8.98403 17.6401 8.94802 17.6011L1.33314 9.36399C1.28238 9.30907 1.24873 9.24055 1.2363 9.1668C1.22388 9.09306 1.23322 9.01729 1.26319 8.94878C1.29316 8.88026 1.34245 8.82197 1.40504 8.78103C1.46762 8.7401 1.54078 8.7183 1.61556 8.71829H5.28095C5.33598 8.7183 5.39037 8.73011 5.44045 8.75293C5.49053 8.77575 5.53514 8.80904 5.57126 8.85056L8.11618 11.7784C8.39122 11.1905 8.92364 10.2116 9.85795 9.01872C11.2392 7.25526 13.8083 4.66176 18.2039 2.32052C18.2888 2.27528 18.3877 2.26354 18.4809 2.28762C18.574 2.31169 18.6548 2.36984 18.7072 2.45057C18.7597 2.5313 18.7799 2.62875 18.764 2.72368C18.748 2.8186 18.6971 2.9041 18.6212 2.96329C18.6044 2.97641 16.9096 4.31102 14.9592 6.7556C13.1641 9.00522 10.7779 12.6837 9.60368 17.4325C9.58305 17.516 9.53508 17.5901 9.46741 17.6431C9.39974 17.696 9.31627 17.7248 9.23033 17.7248L9.23045 17.7247Z"
                                fill="#FD5638"
                              />
                            </svg>}{Text}
                        </li>
                      </ul>
                    );
                  })}
                </ul>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6  col-sm-12  ">
                        <div class="customer-service-img ">
                            <img src="Images/customer-service-back-img.png" alt="img"/>
                        </div>

                    </div>
                </div>


            </div>


        </div>
  );}
export default Customer
