import React from 'react'
import { Link } from 'gatsby'

const Team3 = () => {
  return (
    <section id="team-arch" className="team section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h2 className="wow fadeIn" data-wow-delay=".3s">
                Founder
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item cir sm-mb50">
              <div className="img">
                <img src="/img/team/lee.jpg" alt="" />
                <div className="info">
                  <h6 className="ls3">Lee Cashell</h6>
                  <span className="main-color fw-600">CEO</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 my-auto">
            <p>
              Lee Cashell, originally from Delaware, USA, has spent his
              professional career in North, East, Central and Southeast Asia. As
              a developer, investor and advisor, he has delivered complex
              construction projects in fast growing urban centres and is a point
              of reference for governments and private organizations seeking to
              better understand emerging and frontier markets. Having witnessed
              first hand the barriers to entry in opaque land markets, with
              asymmetry of information, he has developed a data science platform
              to help aggregate information. An enthusiastic advocate of
              sustainable development, he established SDO to help ensure
              development of embassies, consular and diplomatic facilities, are
              compliant, green and future-proofed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team3
