import ContactArch from 'components/Contact-arch/contact-arch'
import FooterArch from 'components/Footer-arch/footer-arch'
import NavbarArch from 'components/Navbar-arch/navbar-arch'
import Services from 'components/Services/services'
import LightTheme from 'layouts/Light'
import React from 'react'

const ServicesPage = () => {
  return (
    <LightTheme>
      <NavbarArch />
      <header className="pages-header circle-bg valign">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="cont mt-100 mb-50 text-center">
                <h1 className="color-font fw-700">
                  Our dedicated team of creatives is bursting with talent,
                  experience and passion for what we do.
                </h1>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="img">
                <img src="/img/arch/slid/1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="half sub-bg">
          <div className="circle-color">
            <div className="gradient-circle"></div>
            <div className="gradient-circle two"></div>
          </div>
        </div>
          </header>
      <Services style="4item" />
      <ContactArch></ContactArch>
      <FooterArch/>
    </LightTheme>
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
export default ServicesPage