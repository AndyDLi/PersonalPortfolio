import { Container, Row, Col } from 'react-bootstrap';
import exampleProjectImage from '../assets/images/exampleProjectImage.png';
import { ProjectCard } from './ProjectCard.jsx';

export const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      imgUrl: exampleProjectImage,
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      imgUrl: exampleProjectImage,
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3',
      imgUrl: exampleProjectImage,
    },
  ];

  return (
    <section className="project editorial-section" id="project">
      <Container className="project-container editorial-container">
        <Row>
          <Col>
            <div className="projects-heading minimal-heading">
              <span className="eyebrow">Portfolio</span>
              <h1>Selection of Recent Work</h1>
            </div>
            <Row className="project-row g-4">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
