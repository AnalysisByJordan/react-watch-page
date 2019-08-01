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
import Arrow from '../style/img/right-arrow.svg'

export default class Product extends Component {
    render() {
      return (

<section className="portfolio_part section_padding">
<div className="container">
  <div className="row">
    <div className="col-lg-12">
      <div className="card-columns">
        <div className="card tittle">
          <blockquote className="blockquote mb-0">
            <h2>Our Collection</h2>
          </blockquote>
        </div>
        <div className="card ">
          <div className="card_iner overlay">
            <img src={Pic1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Luxury</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />
              sed do eiusmod tempor incididunt ut labore</p>
              <a href="#" className="portfolio_btn">Learn more<img src={Arrow} alt />
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card_iner overlay">
            <img src={Pic1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Nautical</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />
              sed do eiusmod tempor incididunt ut labore</p>
              <a href="#" className="portfolio_btn">Learn more<img src={Arrow}  alt />
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card_iner overlay">
            <img src={Pic1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Adventure</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />
              sed do eiusmod tempor incididunt ut labore</p>
              <a href="#" className="portfolio_btn">Learn more<img src={Arrow}  alt />
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card_iner overlay">
            <img src={Pic1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Business</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />
              sed do eiusmod tempor incididunt ut labore</p>
              <a href="#" className="portfolio_btn">Learn more<img src={Arrow}  alt />
              </a>
            </div>
          </div>
        </div>
        <div className="see_more_project">
          <blockquote className="blockquote mb-0">
            <a href="#" className="btn_1">Discover More</a>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
      );
    }
};