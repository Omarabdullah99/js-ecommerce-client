import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">

        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
            vero! Obcaecati repellendus eius placeat dignissimos accusamus cum
            eveniet error illum? Nisi non accusantium eius ex sit quae explicabo
          </div >
        </div>

        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Pabla Karikar Para, Daultapur, Khulna.</div>
          </div>

          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone:+8801624108866</div>
          </div>

          <div className="c-item">
            <FaEnvelope />
            <div className="text">
            Email:omarabdullah917303@gmail.com
            </div>
          </div>
        </div>

        <div className="col">
          <span className="title">Categories</span>
          <span className="text">Headphones</span>
          <span className="text">Smart Watch</span>
          <span className="text">Bluthooth Spekers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>

        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Bluthooth Spekers</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>

      <div className="bottom-bar">
        <div className="bottom-bar-contact">
        <div className="text">OMARSTORE2023 CREATED BY OMAR ABDULLAH.</div>
        <img src={Payment} alt="" />
        </div>
      
      </div>
    </div>
  );
};

export default Footer;
