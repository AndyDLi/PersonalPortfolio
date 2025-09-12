import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => {
            window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const getActiveLink = () => {
        switch(location.pathname) {
            case '/':
                return 'home';
            case '/skills':
                return 'skills';
            case '/projects':
                return 'projects';
            case '/contact':
                return 'contact';
            default:
                return 'home';
        }
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className={getActiveLink() === 'home' ? "active navbar-link" : "navbar-link"}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/skills" className={getActiveLink() === 'skills' ? "active navbar-link" : "navbar-link"}>
                            Skills
                        </Nav.Link>
                        <Nav.Link as={Link} to="/projects" className={getActiveLink() === 'projects' ? "active navbar-link" : "navbar-link"}>
                            Projects
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact" className={getActiveLink() === 'contact' ? "active navbar-link" : "navbar-link"}>
                            Contact
                        </Nav.Link>
                    </Nav>

                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="" /></a>
                            <a href="#"><img src={navIcon2} alt="" /></a>
                            <a href="#"><img src={navIcon3} alt="" /></a>
                        </div>

                        <button className="vvd" onClick={() => console.log('Button Clicked')}>
                            <span>Contact Me</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}