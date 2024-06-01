import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaYoutube, FaSnapchat } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="">
          <h4 className="">Support</h4>
          <ul>
            <li>New York,USA</li>
            <li>crypto@gmail.com</li>
            <li>+91 8523697410</li>
          </ul>
        </div>
        <div className="">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/donate"}>DONATE US</Link>
            </li>
            <li>
              <Link to={"/about"}>ABOUT</Link>
            </li>
            <li>
              <Link to={"/contact"}>CONTACT</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h4>Follow Us</h4>
          <ul>
            <li>
              <Link to={"/"}>
                <span>
                  <FaTwitter />
                </span>
                <span>Twitter</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>
                  <FaYoutube />
                </span>
                <span>Youtube</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>
                  <BsInstagram />
                </span>
                <span>Instagram</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>
                  <FaSnapchat />
                </span>
                <span>SnapChat</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
