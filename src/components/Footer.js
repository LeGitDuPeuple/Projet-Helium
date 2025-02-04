import React from 'react';
import image1 from "../assets/img/investlogo2blue.png"
import image2 from "../assets/img/investlogo3blue.png"
import image3 from "../assets/img/investlogo4blue.png" 

const Footer = () => {
    return (
      <div className="footerContainer">
          <div className="footer-container">
        <div className="footer-gauche">
          <h2>Core tehcnologies</h2>

          <button>Tokens</button>
          <button>Proof of coverage</button>
          <button>LongFi</button>
        </div>

        <div className="footer-droite">
            <div className="h2-container">
          <h2>Our investisor</h2>
          </div>
          <div className="img-containeur">
          <img src={image1} alt="imag1" />
          <img src={image2} alt="image2" />
          <img src={image3} alt="image3" />
        </div>
        </div>
      </div> 
      </div>
    );
};

export default Footer;