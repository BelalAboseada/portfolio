import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./error.scss"
import img404 from "../../assets/Oops! 404 Error with a broken robot-cuate (1).svg"

const Page404 = () => {
  return (
    <section className="page404">
      <div className="container">
        <Row >
          <Col
            lg={12}
            className="d-flex align-items-center justify-content-center"
          >
            <img src={img404} width={400} height={400} alt="404 image" />
          </Col>
          <Col
            lg={12}
            className="d-flex align-items-center justify-content-center"
          >
            <Link className="btn go_home" to="/">
              <strong>Go Home</strong>
            </Link>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Page404;
