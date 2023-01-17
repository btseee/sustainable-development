import React from 'react'
import { Link } from 'gatsby'

const Services6 = () => {
  return (
    <section className="serv-arch">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: 'url(/img/arch/s5.jpg)' }}
          >
            <h6 className="numb">01</h6>
            <h5 className="h-25">Design</h5>
            <p className="demo-1">
              TextTrinm Taking a holistic approach, we contextualize prevailing
              best practice, and seek to offer solutions which are
              location-specific and obviate environmental damage
            </p>
            <Link
              to="/about/about-dark"
              className="custom-font more main-color mt-10"
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
            <h5 className="h-25">Urban Design</h5>
            <p className="demo-1">
              The construction process is carbon intensive, and ensuring green
              buildings are not created at the expense of the environment
              elsewhere, requires intelligent identification of country-specific
              materials and suppliers.
            </p>
            <Link
              to="/about/about-dark"
              className="custom-font more main-color mt-10"
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
            <h5 className="h-25">Energy</h5>
            <p className="demo-1">
              We benefit from an increasingly wide selection of potential
              renewable power options which can be applied to buildings.
            </p>
            <Link
              to="/about/about-dark"
              className="custom-font more main-color mt-10"
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
            <h5 className="h-25"> Social impact</h5>
            <p className="demo-1">
              Development can have an immediate effect on local employment,
              engendering positive sentiment toward clients. With exacting
              standards, scope for skills uplift, training and fair working
              conditions, it can have profoundly positive implications in
              casting the relationship between foreign and local entities.
            </p>
            <Link
              to="/about/about-dark"
              className="custom-font more main-color mt-10"
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
            <h5 className="h-25">Enduring structures</h5>
            <p className="demo-1">
              In each building we develop, careful consideration is given to
              maintenance and renewal on a recurring basis.
            </p>
            <Link
              to="/about/about-dark"
              className="custom-font more main-color mt-10"
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
