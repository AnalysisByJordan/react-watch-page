import React, { Component } from 'react';
import '../style/css/style.css'
import '../style/css/bootstrap.min.css'
import '../style/css/animate.css'
import '../style/css/themify-icons.css'
import '../style/css/magnific-popup.css'
import '../style/css/slick.css'
import '../style/img/favicon.png'
import '../style/css/flaticon.css'
import Pic from '../style/img/watchmaker.jpg'


export default class About extends Component {
    render() {
      return (

<section className="about_part section_bg section_padding">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6 col-lg-6">
              <div className="about_img">
                <img src={Pic} />
              </div>
            </div>
            <div className="col-md-5 col-lg-5">
              <div className="about_text">
                <h2>We Are Committed <br />
                  To Customer Satisfaction</h2>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                <a href="#" className="btn_2">read more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
                 );
                }
            };
            