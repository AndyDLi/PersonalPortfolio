import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/images/contact-img.svg';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  return (
    <section className="contact editorial-section" id="connect">
      <Container className="contact-container editorial-container">
        <Row className="align-items-center g-5">
          <Col md={6}>
            <div className="contact-visual">
              <img src={contactImg} alt="Illustration for the contact section" />
              <div className="contact-info-callout">
                <span className="callout-icon" aria-hidden="true">✉</span>
                <span className="callout-text">I typically respond within 24 hours.</span>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className="contact-form-shell compact-contact-shell">
              <span className="form-kicker">Get in touch</span>
              <h2>Let&apos;s Talk.</h2>
              <form method="POST" action="https://formsubmit.co/andy.dang.li@gmail.com" target="_blank">
                <Row>
                  <Col sm={6} className="px-1">
                    <input
                      name="First Name"
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name *"
                      required
                      onChange={(e) => onFormUpdate('firstName', e.target.value)}
                    />
                  </Col>

                  <Col sm={6} className="px-1">
                    <input
                      name="Last Name"
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name *"
                      required
                      onChange={(e) => onFormUpdate('lastName', e.target.value)}
                    />
                  </Col>

                  <Col sm={6} className="px-1">
                    <input
                      name="Email"
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address *"
                      required
                      onChange={(e) => onFormUpdate('email', e.target.value)}
                    />
                  </Col>

                  <Col sm={6} className="px-1">
                    <input
                      name="Phone"
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone Number"
                      onChange={(e) => onFormUpdate('phone', e.target.value)}
                    />
                  </Col>

                  <Col>
                    <textarea
                      name="Message"
                      rows="6"
                      value={formDetails.message}
                      placeholder="Message (Optional)"
                      onChange={(e) => onFormUpdate('message', e.target.value)}
                    >
                    </textarea>
                    <button type="submit"><span>Send</span></button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
