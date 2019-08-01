import React, { Component } from 'react';
import '../style/css/style.css'
import '../style/css/bootstrap.min.css'
import '../style/css/animate.css'
import '../style/css/themify-icons.css'
import '../style/css/magnific-popup.css'
import '../style/css/slick.css'
import '../style/img/favicon.png'
import '../style/css/flaticon.css'


export default class Banner extends Component {
    render() {
      return (

<section className="banner_part">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-10">
              <div className="banner_text text-center">
                <div className="banner_text_iner">
                  <h5>Since <span>1990</span> </h5>
                  <h1>Mountain Watches</h1>
                  <h4>High Quality | Hand Made</h4>
                  <a href="#" className="btn_1">learn more </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
           );
    }
};
