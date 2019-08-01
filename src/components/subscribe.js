import React, { Component } from 'react';
import '../style/css/style.css'
import '../style/css/bootstrap.min.css'
import '../style/css/animate.css'
import '../style/css/themify-icons.css'
import '../style/css/magnific-popup.css'
import '../style/css/slick.css'
import '../style/img/favicon.png'
import '../style/css/flaticon.css'

export default class Subscribe extends Component {
    render() {
      return (

      <section className="subscribe_area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="subscribe_iner">
              <div className="row align-items-center">
                <div className="col-lg-5 col-xl-5">
                  <div className="subscribe_area_tittle">
                    <h2>Do You Have a Question?</h2>
                  </div>
                </div>
                <div className="col-lg-7 col-xl-6">
                  <div id="mc_embed_signup">
                    <aside className="single_sidebar_widget newsletter_widget">
                      <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get">
                        <div className="form-group">
                          <input type="email" className="form-control" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email'" placeholder="Enter email" required />
                        </div>
                        <button className="btn_2" type="submit">Subscribe</button>
                        <div className="info" />
                      </form>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
                );
            }
        };
