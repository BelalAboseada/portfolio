import { useParams } from "react-router-dom";
import { portfolio } from "../../data";
import "./Style.scss";
import { Col, Row } from "react-bootstrap";
const ProjectDetails = () => {
  const { id } = useParams();

  // Find the project with the matching ID
  const project = portfolio.find((project) => project.id === parseInt(id));
  console.log(project);

  // Check if the project is not found
  if (!project) {
    return (
      <h6 className=" d-flex justify-content-center align-items-center">
        Project not found!
      </h6>
    );
  }

  // Destructure project details
  const { img, title, details } = project;

  return (
    <div className="ProjectDetails">
        <h2 className="section__title">Project <span>detailes</span></h2>
      <Row>
        <Col lg={6} md={12} sm={12}>
          <div className="ProjectDetails_img">
            <img src={img} alt={title} />
          </div>
        </Col>
        <Col lg={6} md={12} sm={12}>
          <div className="ProjectDetails_content">
            <h3 className="ProjectDetails_title">{title}</h3>
            {/* Render details here */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectDetails;
