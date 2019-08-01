import React, { Component } from 'react';
import '../style/css/style.css'
import '../style/css/bootstrap.min.css'
import '../style/css/animate.css'
import '../style/css/themify-icons.css'
import '../style/css/magnific-popup.css'
import '../style/css/slick.css'
import '../style/img/favicon.png'
import '../style/css/flaticon.css'
import { IoIosAirplane  } from "react-icons/io";
import { IoIosTrophy  } from "react-icons/io";
import { IoMdNavigate } from "react-icons/io";
import { IoMdPeople } from "react-icons/io";

export default class Service extends Component {
    render() {
      return (

<section className="service_part section_padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single_service_part">
                <IoIosAirplane className = "icon-style"/>
                <span className="line" />
                <h3>Adventure</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                   incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single_service_part">
              <IoIosTrophy className = "icon-style"/>
                <span className="line" />
                <h3>Luxury</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single_service_part">
              <IoMdNavigate className = "icon-style"/>
                <span className="line" />
                <h3>Nautical</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single_service_part">
              <IoMdPeople className = "icon-style"/>
                <span className="line" />
                <h3>Business</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
              </div>
            </div>
          </div>
        </div>
      </section>
            );
        }
    };