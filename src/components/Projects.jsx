import { Container, Row, Col, Tab } from 'react-bootstrap';
import exampleProjectImage from '../assets/images/exampleProjectImage.png';
import { ProjectCard } from './ProjectCard.jsx';

export const Projects = () => {
    const projects = [
        {
            title: "Project 1",
            description: "Description of Project 1",
            imgUrl: exampleProjectImage,
        },
        {
            title: "Project 2",
            description: "Description of Project 2",
            imgUrl: exampleProjectImage,
        },
        {
            title: "Project 3",
            description: "Description of Project 3",
            imgUrl: exampleProjectImage,
        },
    ];

    return (
        <section className="project" id="project">
            {/* Notion decorative shapes — unique to Projects */}
            <div className="notion-shape project-shape-diamond"></div>
            <div className="notion-shape project-shape-line"></div>
            <div className="notion-shape project-shape-ring"></div>
            <Container className="project-container">
                <Row>
                    <Col>
                        <h2>Portfolio</h2>
                        <p className="project-subtitle">A Selection of Recent Work and Side Projects.</p>
                        <hr className="project-divider" />

                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row className="project-row">
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                        key={index}
                                                        {...project}
                                                    />
                                                );
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}