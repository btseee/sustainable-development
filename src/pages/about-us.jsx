import React from 'react'
import { Link } from 'gatsby'
import LightTheme from 'layouts/Light'
import NavbarArch from 'components/Navbar-arch/navbar-arch'
import FooterArch from 'components/Footer-arch/footer-arch'
import ContactArch from 'components/Contact-arch/contact-arch'

const AboutUs = () => {
  return (
    <>
      <LightTheme>
        <NavbarArch />
        <section id="aboutus" className="about-ar section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sec-head text-left">
                  <h3 className="wow fadeIn" data-wow-delay=".3s">
                    About us
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <p className="text-dark">
                  The Sustainable Development Organization (SDO) is a specialist
                  partner in the provision of diplomatic and administrative
                  facilities in developing countries. Working on behalf of
                  governments, agencies and international organizations, we run
                  a full-service process, identifying land, managing planning
                  and permitting, identifying construction partners, and
                  overseeing the development process. Underpinning our client
                  partnerships are principles of sustainable design which inform
                  our methodology, from inception through to completion. SDO’s
                  Founders have worked on mandates in Myanmar, Mongolia,
                  Indonesia, Vietnam, Japan, Thailand and the Philippines,
                  leading development processes and advisory assignments for the
                  State Department, the International Finance Corporation (IFC)
                  and the World Bank. We maintain close relationships with
                  planning, housing, construction and foreign investment
                  ministries in many countries globally. Our clients value
                  discretion, and this underpins our approach to assignments.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="principles">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sec-head text-left">
                  <h3 className="wow fadeIn" data-wow-delay=".3s">
                    Our Main Principles
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <p className="text-dark">
                  The challenge many organizations face is the adoption of
                  best-in-class principles governing social, environmental and
                  compliance matters, in unfamiliar environments. The correct
                  application of these principles, however, is not simply about
                  doing good. It is increasingly mandated under international
                  legislation, fulfils a diplomatic purpose and helps set
                  precedent and increase standards. We conform with, and
                  support, the United Nations Sustainable Development Goals
                  (UNSDGs).
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <p className="text-dark mt-3">
                  List out the SDGS (and visual aid):
                  <ul className='pt-5 ml-4'>
                        <li>No poverty</li>
                        <li>Zero hunger</li>
                        <li>Good health and well being</li>
                        <li>Quality education</li>
                        <li>Gender equality</li>
                        <li>Clean water and sanitation</li>
                        <li>Affordable and clean energy</li>
                        <li>Decent work and economic growth</li>
                        <li>Industry innovation and infrastructure</li>
                        <li>Reduced inequalities</li>
                        <li>Sustainable cities and communities</li>
                        <li>Responsible consumption and production</li>
                        <li>Climate action</li>
                        <li>Life below water</li>
                        <li>Life on land</li>
                        <li>Peace, justice and strong institutions</li>
                        <li>Partnerships for the goals</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactArch />
        <FooterArch />
      </LightTheme>
    </>
  )
}
export const Head = () => {
  return (
    <>
      <title>Sustainable Development</title>
      <link rel="stylesheet" href="/css/arch-skin-light.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Khand:wght@300;400;500;600;700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
      />
    </>
  )
}
export default AboutUs
