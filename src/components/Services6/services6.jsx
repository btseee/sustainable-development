import React from 'react'
import { Link } from 'gatsby'
import TextTruncate from 'react-text-truncate'
const Services6 = () => {
  return (
    <section className="serv-arch" id="services">
       <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h2 className="wow fadeIn" data-wow-delay=".3s">
                Services
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: 'url(/img/arch/s5.jpg)' }}
          >
            <h6 className="numb">01</h6>
            <h5 >Design</h5>
            <TextTruncate
              line={2}
              element="p"
              truncateText=" ..."
              text="TextTrinm Taking a holistic approach, we contextualize prevailing
              best practice, and seek to offer solutions which are
              location-specific and obviate environmental damage"
            />
            <Link
              to="/about/about-dark"
              className="custom-font more main-color mt-20"
              style={{ pointerEvents: 'none' }}
            >
              Read More
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: 'url(/img/arch/s5.jpg)' }}
          >
            <h6 className="numb">02</h6>
            <h5 >Urban Design</h5>
            <TextTruncate
              line={2}
              element="p"
              truncateText=" ..."
              text="The construction process is carbon intensive, and ensuring green
              buildings are not created at the expense of the environment
              elsewhere, requires intelligent identification of country-specific
              materials and suppliers."
            />
            <Link
              to="/about/about-dark"
              className="custom-font more main-color mt-20"
              style={{ pointerEvents: 'none' }}
            >
              Read More
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: 'url(/img/arch/s5.jpg)' }}
          >
            <h6 className="numb">03</h6>
            <h5 >Energy</h5>
            <TextTruncate
              line={2}
              element="p"
              truncateText=" ..."
              text="We benefit from an increasingly wide selection of potential
              renewable power options which can be applied to buildings."
            />

            <Link
              to="/about/about-dark"
              className="custom-font more main-color mt-20"
              style={{ pointerEvents: 'none' }}
            >
              Read More
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: 'url(/img/arch/s5.jpg)' }}
          >
            <h6 className="numb">04</h6>
            <h5 > Social impact</h5>
            <TextTruncate
              line={2}
              element="p"
              truncateText=" ..."
              text="
              Development can have an immediate effect on local employment,
              engendering positive sentiment toward clients. With exacting
              standards, scope for skills uplift, training and fair working
              conditions, it can have profoundly positive implications in
              casting the relationship between foreign and local entities."
            />
            <Link
              to="/about/about-dark"
              className="custom-font more main-color mt-20"
              style={{ pointerEvents: 'none' }}
            >
              Read More
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: 'url(/img/arch/s5.jpg)' }}
          >
            <h6 className="numb">05</h6>
            <h5 >Enduring structures</h5>
            <TextTruncate
              line={2}
              element="p"
              truncateText=" ..."
              text="In each building we develop, careful consideration is given to
              maintenance and renewal on a recurring basis."
            />
            <Link
              to="/about/about-dark"
              className="custom-font more main-color mt-20"
              style={{ pointerEvents: 'none' }}
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services6
