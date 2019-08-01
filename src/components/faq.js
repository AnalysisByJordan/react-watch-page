import React, { Component } from 'react';
import '../style/css/style.css'
import '../style/css/bootstrap.min.css'
import '../style/css/animate.css'
import '../style/css/themify-icons.css'
import '../style/css/magnific-popup.css'
import '../style/css/slick.css'
import '../style/img/favicon.png'
import '../style/css/flaticon.css'
import Use1 from '../style/img/businessUse.jpg'
import Use2 from '../style/img/casualUse.jpg'
import Use3 from '../style/img/outdoorUSE.jpg'


export default class Faq extends Component {
    render() {
        return (

            <section className="our_industries padding_top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3">
                            <div className="section_tittle">
                                <h2>Our Customers</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single_industries">
                                <img src={Use1} />
                                <h3> <a href="#">Business</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single_industries">
                            <img src={Use2} />
                                <h3><a href="#">Casual</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single_industries">
                            <img src={Use3} />
                                <h3><a href="#">Outdoors</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};