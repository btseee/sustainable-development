import React from "react";
import { Link } from 'gatsby';

const LatestNews = () => {
  return (
    <section className="blog section-padding" id="blog-arch">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h2 className="wow fadeIn" data-wow-delay=".3s">
                Latest News
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="item md-mb50 wow fadeInUp" data-wow-delay=".3s">
              <div className="img">
                <img src="/img/arch/blog/1.jpg" alt="" />
              </div>
              <div className="cont">
                <div>
                  <div className="info">
                    <Link to="/blog/blog-dark" className="date"  style={{pointerEvents: "none"}} >
                      <span>
                        <i>06</i> August
                      </span>
                    </Link>
                    <span>/</span>
                    <Link to="/blog/blog-dark" className="tag"  style={{pointerEvents: "none"}} >
                      <span className="main-color">sdsfda</span>
                    </Link>
                  </div>
                  <h5>
                    <Link to="/blog-details/blog-details-dark"  style={{pointerEvents: "none"}} >
                      asfasfa
                    </Link>
                  </h5>
                  <div className="btn-more">
                    <Link to="/blog-details/blog-details-dark" className="simple-btn main-color"  style={{pointerEvents: "none"}} >
                      More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
