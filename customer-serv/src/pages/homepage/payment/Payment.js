import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function Payment() {
let heading2="Our Online Shop Supports Payments with Cryptocurrencies";
let paragraph="Pay for the goods with just one click! Elegro plugin makes it superp cryptocurrencies!";
const imageUrl = "Images/support-payment.png";
const imagelogo = "Images/payment-text-logo.png";
  return (
    <div className="support-payments-wrap">
   
    <div className="container">
     <div className="row">
       <div className="col-md-5 col-sm-12">
           <div className="support-payments-text">
           <img src={imagelogo} alt="Example" />

                     <h2>{heading2}</h2>
                     <p>{paragraph}
                     </p>
                 </div>
                 <div className="col-md-4 col-sm-12">
                     <button className="btn support-payments-button">View Now</button>
                 </div>
           </div>
            <div className="col-md-5 col-sm-12">
                <div className="support-payments-img">
                <img src={imageUrl} alt="Example" />

                </div>
            </div>
         </div>
     </div>
 </div>
  )
}

export default Payment