import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bannerPhoto from '../assets/images/bannerPhoto.png';

const roles = [
  'Software Engineer',
  'Machine Learning Engineer',
  'Agentic AI Architect'
];

export const Banner = () => {
  const [loopIndex, setLoopIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200);
  const transitionPeriod = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      const currentIndex = loopIndex % roles.length;
      const fullText = roles[currentIndex];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((previousDelta) => previousDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(transitionPeriod);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopIndex((current) => current + 1);
        setDelta(200);
      }
    }, delta);

    return () => clearInterval(ticker);
  }, [delta, isDeleting, loopIndex, text]);

  return (
    <section className="banner editorial-section" id="home">
      <Container className="banner-container editorial-container">
        <Row className="align-items-center g-5">
          <Col xs={12} md={6} xl={7}>
            <div className="hero-copy">
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>{`Hi! I'm Andy, `}<span className="wrap">{text}</span></h1>
              <p>
                Computer Science Student @ <span className="gt-gold">Georgia Institute of Technology</span>
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="banner-img-wrapper">
              <img src={bannerPhoto} alt="Portrait of Andy Li" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
