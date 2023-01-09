import React from 'react'
import { Link } from 'gatsby'
import initIsotope from 'common/initIsotope'

const WorksStyle5 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope()
    }, 1000)
  }, [])

  return (
    <section className="portfolio po-arch section-padding pb-70" id="po-arch">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h2 className="wow fadeIn" data-wow-delay=".3s">
                Frameworks
              </h2>
              <p>
                In certain instances, clients seek to adopt globally recognized
                standards to help track performance and report to stakeholders.
                We can help assess, position and measure buildings according to
                these protocols. These include:
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="gallery full-width">
            <div
              className="col-md-6 items graphic lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link
                  to={`/project-details2/project-details2-dark`}
                  className="imago wow"  style={{pointerEvents: "none"}} 
                >
                  <img src="/img/arch/work/1.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h5>GRESB</h5>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link
                  to={`/project-details2/project-details2-dark`}
                  className="imago wow"  style={{pointerEvents: "none"}} 
                >
                  <img src="/img/arch/work/2.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h5>2012 International Green Construction Code (IGCC)</h5>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link
                  to={`/project-details2/project-details2-dark`}
                  className="imago wow" style={{pointerEvents: "none"}} 
                >
                  <img src="/img/arch/work/5.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h5>ANSI/ASHRAE/USGBC/IES Standard 189.1-2011</h5>
              </div>
            </div>

            <div
              className="col-md-6 items web graphic wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link
                  to={`/project-details2/project-details2-dark`}
                  className="imago wow"  style={{pointerEvents: "none"}} 
                >
                  <img src="/img/arch/work/3.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h5>Green Globes Certification</h5>
              </div>
            </div>

            <div
              className="col-md-6 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link
                  to={`/project-details2/project-details2-dark`}
                  className="imago wow"  style={{pointerEvents: "none"}} 
                >
                  <img src="/img/arch/work/4.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h5>US Green Building Council’s Leadership in Energy and Environmental Design (LEED)</h5>
              </div>
            </div>

            <div
              className="col-md-6 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link
                  to={`/project-details2/project-details2-dark`}
                  className="imago wow"  style={{pointerEvents: "none"}} 
                >
                  <img src="/img/arch/work/6.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h5>Living Building Challenge</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorksStyle5
