import React, { Component } from 'react';
import '../style/css/style.css'
import '../style/css/bootstrap.min.css'
import '../style/css/animate.css'
import '../style/css/themify-icons.css'
import '../style/css/magnific-popup.css'
import '../style/css/slick.css'
import '../style/img/favicon.png'
import '../style/css/flaticon.css'
import Logo from '../style/img/logo.png'
import { IoIosPhonePortrait } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoPinterest } from "react-icons/io";

export default class Header extends Component {
    render() {
      return (
  
        <header className="main_menu">
        <div className="sub_menu">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-8">
                <div className="sub_menu_right_content">
                  <a href="#"><IoIosPhonePortrait className="flaticon-phone-call" />+02 89 365 3652</a> <span>|</span>
                  <a href="#"><IoMdMail className="flaticon-at" />Info@mountainwatches.com</a>
                </div>
              </div>
              <div className="col-lg-6 col-sm-4">
                <div className="sub_menu_social_icon">
                  <a href="#"><IoLogoFacebook className="flaticon-facebook" /></a>
                  <a href="#"><IoLogoTwitter className="flaticon-twitter" /></a>
                  <a href="#"><IoLogoPinterest className="flaticon-skype" /></a>
                  <a href="#"><IoLogoInstagram className="flaticon-instagram" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main_menu_iner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <a className="navbar-brand" href="index.html"> <img src={Logo} /> </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse main-menu-item justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <a className="nav-link" href="index.html">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="about.html">About</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="project.html">Products</a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Drop Down Menu
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" href="blog.html">Option 1</a>
                          <a className="dropdown-item" href="single-blog.html">Option 2</a>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Drop Down Menu
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                          <a className="dropdown-item" href="service.html">Option 1</a>
                          <a className="dropdown-item" href="project_details.html">Option 2</a>
                          <a className="dropdown-item" href="elements.html">Option 3</a>
                        </div>
                      </li>
                      <li className="nav-item active">
                        <a className="nav-link" href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      );
    }
};
