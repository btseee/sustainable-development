import React from 'react';
import Team3 from 'components/Team3/team3';
import Intro5 from 'components/Intro5/intro5';
import AboutUs6 from 'components/About-us6/about-us6';
import Services6 from 'components/Services6/services6';
import NavbarArch from 'components/Navbar-arch/navbar-arch';
import WorksStyle5 from 'components/Works-style5/works-style5';
import FooterArch from 'components/Footer-arch/footer-arch.jsx';
import ContactArch from 'components/Contact-arch/contact-arch';
import TestimonialsArch from 'components/Testimonials-arch/testimonials-arch';
import LightTheme from 'layouts/Light';

const Index = () => {
  const navbarRef = React.useRef(null)

  React.useEffect(() => {
    var navbar = navbarRef.current

    if (window.pageYOffset > 300) {
      navbar.classList.add('nav-scroll')
    } else {
      navbar.classList.remove('nav-scroll')
    }

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add('nav-scroll')
      } else {
        navbar.classList.remove('nav-scroll')
      }
    })
  }, [navbarRef])

  return (
    <>
      <LightTheme useSkin>
        <NavbarArch navbarRef={navbarRef} />
        <Intro5 />
        <AboutUs6 />
        <Team3 />
        <Services6 />
        <WorksStyle5 />
        <TestimonialsArch />
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

export default Index
