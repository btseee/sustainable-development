import React from 'react'
import { Link } from 'gatsby'

const AboutUs6 = () => {
    return (
      <section id="about" className="about-ar section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 valign">
              <div className="img">
                <div
                  className="bg-img bg-fixed hero-bg"
                  style={{ backgroundImage: "url(/img/arch/hero.jpg)" }}
                />
                <div className="exp valign text-center">
                  <div className="full-width">
                    <h2
                      className="bg-img bg-fixed"
                      style={{ backgroundImage: "url(/img/arch/hero.jpg)" }}
                    >
                     445
                    </h2>
                    <p>Years</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 valign">
              <div className="content">
                <h6 className="sub-title main-color ls10 text-u">About Us</h6>
                <h3>Best Agency for You.</h3>
                <p>
                The Sustainable Development Organization (SDO) is a specialist partner in the provision of diplomatic and administrative facilities in developing countries. Working on behalf of governments, agencies and international organizations, we run a full-service process, identifying land, managing planning and permitting, identifying construction partners, and overseeing the development process. Underpinning our client partnerships are principles of sustainable design which inform our methodology, from inception through to completion. 
                </p>
                <Link  className="butn bord mt-30" style={{pointerEvents: "none"}} >
                  <span>About Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default AboutUs6