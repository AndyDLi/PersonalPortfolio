import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import linkedInIcon from '../assets/images/linkedIn.svg';
import gitHubIcon from '../assets/images/gitHub.png';

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);
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
        setExpanded(!expanded);
    };

    // Close Menu When Screen Size Changes to Desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 991.98) {
                setExpanded(false);
            }
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className={`mobile-menu-overlay ${expanded ? 'show' : ''}`} onClick={handleNavClick}></div>
            
            <Navbar expand="lg" expanded={expanded} className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} alt="Logo" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" className={getActiveLink() === 'home' ? "active navbar-link" : "navbar-link"} onClick={handleNavClick}>
                                <span className="nav-emoji">🏠</span>
                                <span className="nav-label">Home</span>
                            </Nav.Link>

                            <Nav.Link as={Link} to="/projects" className={getActiveLink() === 'projects' ? "active navbar-link" : "navbar-link"} onClick={handleNavClick}>
                                <span className="nav-emoji">📂</span>
                                <span className="nav-label">Projects</span>
                            </Nav.Link>

                            <Nav.Link as={Link} to="/contact" className={getActiveLink() === 'contact' ? "active navbar-link" : "navbar-link"} onClick={handleNavClick}>
                                <span className="nav-emoji">✉️</span>
                                <span className="nav-label">Contact</span>
                            </Nav.Link>
                        </Nav>

                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/andyli8/" target="_blank" className="social-linkedin" aria-label="LinkedIn"><img src={linkedInIcon} alt="LinkedIn" /></a>
                                <a href="https://github.com/AndyDLi" target='_blank' className="social-github" aria-label="GitHub"><img src={gitHubIcon} alt="GitHub" /></a>
                            </div>

                            <Link to="/contact" className="contact-btn" onClick={handleNavClick}>
                                <span>✦ Let's Talk</span>
                            </Link>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}