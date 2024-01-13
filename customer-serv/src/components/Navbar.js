
import React from "react";
import"../assets/Sass/cust-service.scss";
export default function Navbar() {
  const navList = [
    {
      link: "/Home",
      navText: "Home",
    },
    {
      link: "/Product",
      navText: "Product",
    },
    {
      link: "/Industries",
      navText: "Industries",
    },
    
    {
      link: "/FAQ's",
      navText: "FAQ's",
    },
    
    {
    link: "/Resources",
      navText: "Resources",
    },
  ];


  return (
    <nav className="NavBar">
      <div className="logo">
        <a href="/">
          <img src="./images/Logo.png" alt="logo" />
        </a>
      </div>
      <div className="Nav-List">
        <ul>
          {navList.map(({ link, navText }, i) => {
            return (
              <li key={i}>
                <a href={link}>{navText}</a>
                </li>
            );
          })}
        </ul>
       
      </div>
      <div className="nav-btn">
         <button class="btn">Try for free</button>
      </div>

      
    </nav>
  );
}
