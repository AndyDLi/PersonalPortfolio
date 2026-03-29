import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import linkedInIcon from '../assets/images/linkedIn.svg';
import gitHubIcon from '../assets/images/gitHub.png';

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const navItems = [
    { key: 'home', label: 'Home', to: '/' },
    { key: 'projects', label: 'Projects', to: '/projects' },
    { key: 'contact', label: 'Contact', to: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991.98) {
        setExpanded(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getActiveLink = () => {
    switch (location.pathname) {
      case '/':
        return 'home';
      case '/projects':
        return 'projects';
      case '/contact':
        return 'contact';
      default:
        return 'home';
    }
  };

  const handleNavClick = () => {
    setExpanded(false);
  };

  const handleToggle = () => {
    setExpanded((current) => !current);
  };

  return (
    <>
      <div className={`mobile-menu-overlay ${expanded ? 'show' : ''}`} onClick={handleNavClick}></div>

      <Navbar expand="lg" expanded={expanded} className={scrolled ? 'scrolled' : ''}>
        <Container className="nav-shell">
          <Navbar.Brand as={Link} to="/" className="site-brand">
            <span className="brand-mark" aria-hidden="true">A</span>
            <span className="brand-copy">
              <strong>Andy Li</strong>
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navItems.map((item) => (
                <Nav.Link
                  key={item.key}
                  as={Link}
                  to={item.to}
                  className={getActiveLink() === item.key ? 'active navbar-link' : 'navbar-link'}
                  onClick={handleNavClick}
                >
                  <span className="nav-label">{item.label}</span>
                </Nav.Link>
              ))}
            </Nav>

            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/andyli8/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-linkedin"
                  aria-label="LinkedIn"
                >
                  <img src={linkedInIcon} alt="" />
                </a>
                <a
                  href="https://github.com/AndyDLi"
                  target="_blank"
                  rel="noreferrer"
                  className="social-github"
                  aria-label="GitHub"
                >
                  <img src={gitHubIcon} alt="" />
                </a>
              </div>

              <Link to="/contact" className="contact-btn" onClick={handleNavClick}>
                <span>Reach Out</span>
              </Link>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
