import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bannerPhoto from '../assets/images/bannerPhoto.png';

export const Banner = () => {
    const [loopIndex, setLoopIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Software Developer', 'Exploring AI/ML', 'Studying Cybersecurity'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200);
    const transitionPeriod = 2000;

    useEffect(() => {
        let ticker = setInterval(() => { tick(); }, delta);
        return () => { clearInterval(ticker); }
    }, [text]);

    const tick = () => {
        let i = loopIndex % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(transitionPeriod);
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopIndex(loopIndex + 1);
            setDelta(200);
        }
    }

    return (
        <section className="banner" id="home">
            <Container className="banner-container">
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi! I'm Andy,`} <span className="wrap"></span>{text}</h1>
                        <p>Computer Science Student @ <span className="gt-gold">Georgia Institute of Technology</span></p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div className="banner-img-wrapper">
                            <div className="notion-shape shape-circle"></div>
                            <div className="notion-shape shape-square"></div>
                            <div className="notion-shape shape-dots"></div>
                            <img src={bannerPhoto} alt="Logo Image" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="banner-accent-bar"></div>
        </section>
    );
}