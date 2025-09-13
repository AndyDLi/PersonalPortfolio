import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import linkedInIcon from '../assets/images/linkedIn.svg';
import gitHubIcon from '../assets/images/gitHub.png';
import homeIcon from '../assets/images/home.webp';
import personIcon from '../assets/images/person.png';
import projectsIcon from '../assets/images/projects.png';
import mailIcon from '../assets/images/mail.png';

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
                            <img src={homeIcon} alt="Home Icon" />
                            <p>Home</p>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/skills" className={getActiveLink() === 'skills' ? "active navbar-link" : "navbar-link"}>
                            <img src={personIcon} alt="Skills Icon" />
                            <p>Skills</p>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/projects" className={getActiveLink() === 'projects' ? "active navbar-link" : "navbar-link"}>
                            <img src={projectsIcon} alt="Projects Icon" />
                            <p>Projects</p>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact" className={getActiveLink() === 'contact' ? "active navbar-link" : "navbar-link"}>
                            <img src={mailIcon} alt="Contact Icon" />
                            <p>Contact</p>
                        </Nav.Link>
                    </Nav>

                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/andyli8/" target="_blank"><img src={linkedInIcon} alt="" /></a>
                            <a href="https://github.com/AndyDLi" target='_blank'><img src={gitHubIcon} alt="" /></a>
                        </div>

                        <button className="vvd">
                            <a href="/contact"><span>Contact Me</span></a>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}