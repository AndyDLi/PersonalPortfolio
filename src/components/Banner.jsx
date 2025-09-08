import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/images/header-img.svg';

export const Banner = () => {
    const [loopIndex, setLoopIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Software Developer', 'AI Enthusiast', 'Computer Science Student'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(250);
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
            setDelta(250);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span classNam="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi! I'm Andy,`} <span className="wrap"></span>{text}</h1>
                        <p>Computer Science Student @ Georgia Institute of Technology</p>
                        <button onClick={() => console.log("Button Clicked!")}>Let's Connect! <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Image" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}