import React, { Component } from 'react';
import '../style/css/style.css'
import '../style/css/bootstrap.min.css'
import '../style/css/animate.css'
import '../style/css/themify-icons.css'
import '../style/css/magnific-popup.css'
import '../style/css/slick.css'
import '../style/img/favicon.png'
import '../style/css/flaticon.css'
import Pic1 from '../style/img/product1.jpg'
import Pic2 from '../style/img/product2.jpg'
import Pic3 from '../style/img/product3.jpg'
import Pic4 from '../style/img/product4.jpg'


export default class Footer extends Component {
    render() {
      return (




<footer className="footer-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-sm-6 col-md-3 col-xl-3">
              <div className="single-footer-widget footer_1">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-2 col-xl-2 offset-xl-1">
              <div className="single-footer-widget">
                <h4>Locations</h4>
                <ul>
                  <li><a href="#">Paris</a></li>
                  <li><a href="#">New York</a></li>
                  <li><a href="#">Los Angeles</a></li>
                  <li><a href="#">London</a></li>
                  <li><a href="#">Washington</a></li>
                  <li><a href="#">San Fransisco</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-xl-3">
              <div className="single-footer-widget footer_3">
                <h4> our Gallery</h4>
                <div className="footer_img">
                  <div className="single_footer_img">
                    <img src= {Pic1}/>
                  </div>
                  <div className="single_footer_img">
                    <img src={Pic2}/>
                  </div>
                  <div className="single_footer_img">
                    <img src={Pic3} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-xl-3">
              <div className="single-footer-widget footer_icon">
                <h4>Contact Info</h4>
                <p>1234 Watch Maker Lane, Watch Town, US 12345</p>
                <ul>
                  <li><a href="#"><i className="ti-mobile" />+02 89 365 3652</a></li>
                  <li><a href="#"><i className="ti-email" />info@mountainwatches.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="copyright_part_text text-center">
                <p className="footer-text m-0">
                  Developed by Jordan Robey
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
            );
        }
    };