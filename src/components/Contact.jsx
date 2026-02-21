import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/images/contact-img.svg';

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    }
 
    return (
        <section className="contact" id="connect">
            {/* Notion decorative shapes — unique to Contact */}
            <div className="notion-shape contact-shape-plus"></div>
            <div className="notion-shape contact-shape-bracket"></div>
            <div className="notion-shape contact-shape-dash-row"></div>
            <Container className="contact-container">
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Me" />
                        <div className="contact-info-callout">
                            <span className="callout-icon">📬</span>
                            <span className="callout-text">I Typically Respond Within 24 Hours.</span>
                        </div>

                    </Col>

                    <Col md={6}>
                        <h2>Get In Touch!</h2>
                        <form method="POST" action="https://formsubmit.co/andy.dang.li@gmail.com" target="_blank">
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input 
                                        name="First Name"
                                        type="text" 
                                        value={formDetails.firstName} 
                                        placeholder="First Name *" 
                                        required
                                        onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>

                                <Col sm={6} className="px-1">
                                    <input 
                                        name="Last Name"
                                        type="text" 
                                        value={formDetails.lastName} 
                                        placeholder="Last Name *"
                                        required 
                                        onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>

                                <Col sm={6} className="px-1">
                                    <input 
                                        name="Email"
                                        type="email" 
                                        value={formDetails.email} 
                                        placeholder="Email Address *" 
                                        required
                                        onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>

                                <Col sm={6} className="px-1">
                                    <input 
                                        name="Phone"
                                        type="tel" 
                                        value={formDetails.phone} 
                                        placeholder="Phone Number (Optional)" 
                                        onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>

                                <Col>
                                    <textarea
                                        name="Message"
                                        row="6"
                                        value={formDetails.message}
                                        placeholder="Message (Optional)"
                                        onChange={(e) => onFormUpdate('message', e.target.value)}>
                                    </textarea>
                                    <button type="submit"><span>Send</span></button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}