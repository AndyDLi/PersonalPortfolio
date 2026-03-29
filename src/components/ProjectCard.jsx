import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col xs={4} md={4}>
      <article className="project-imgBox">
        <img src={imgUrl} alt={`${title} preview`} />
        <div className="project-text">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </article>
    </Col>
  );
};
