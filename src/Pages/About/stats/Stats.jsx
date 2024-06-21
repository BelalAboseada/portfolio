import { Col, Row } from "react-bootstrap";
import { stats } from "../../../data";

const Stats = () => {
  return (
    <Row>
      {stats.map(({ no, title, img }, index) => (
        <Col
          lg={4}
          md={12}
          sm={12}
          key={index}
          className="text-center"
          data-aos="fade-down"
          data-aos-anchor-placement="top-left"
          data-aos-duration="900"
        >
          <div className="stats__box">
            <img className="status_img" src={img} alt={title} />
            <div className="Status_cotent">
              <h3 className="stats__no">{no}</h3>
              <p className="stats__title">{title}</p>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Stats;
