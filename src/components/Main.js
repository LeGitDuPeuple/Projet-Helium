import React from 'react';
import mainImage from "../assets/img/main.png";

const Main = () => {
    return (
       <div className="main">
         <div className="header-left">
            <div className="header-left-container">
            <h1>
              People-
              Powered 
              Networks
            </h1>
            <h3>Starts a Wirelesse Revoution</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus voluptates cum minima atque qui, rem in!
            </p>
            </div>
        </div>

          <div className="header-right">
            <img src={mainImage} id='kiki' alt="illustration principal" />
          </div>
    </div>
       
    );
};

export default Main;