import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import exampleProjectImage from '../assets/images/exampleProjectImage.png';
import { ProjectCard } from './ProjectCard.jsx';

export const Projects = () => {
    const projects = [
        {
            title: "Project 1",
            description: "Description of Project 1",
            imgUrl: exampleProjectImage
        },
        {
            title: "Project 2",
            description: "Description of Project 2",
            imgUrl: exampleProjectImage
        },
        {
            title: "Project 3",
            description: "Description of Project 3",
            imgUrl: exampleProjectImage
        },
    ];

    return (
        <section className="project" id="project">
            <Container className="project-container">
                <Row>
                    <Col>
                        <h2>Portfolio</h2>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav> */}

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
                                {/* <Tab.Pane eventKey="second">Filler</Tab.Pane>
                                <Tab.Pane eventKey="third">Filler</Tab.Pane> */}
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}