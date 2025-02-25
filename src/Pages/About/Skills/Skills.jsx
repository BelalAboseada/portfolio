import { useState } from "react";
import { skills } from "../../../data";
import { Col, Row } from "react-bootstrap";
import "../style.scss";

const Skills = () => {
  const [category, setCategory] = useState("Skills");
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);
  // Function to handle tab selection
  const handleTabClick = (cat, index) => {
    setLeft(index * 100);
    setCategory(cat);
    setSelectedTab(index);
  };

  // Filter skills based on category
  const filteredSkills = skills.filter((skill) => skill.Cat === category);

  return (
    <Row>
      <h6 className="Sec_Title">ـــــ My Skills</h6>

      <Col lg={6} sm={12} className="skills__content">
        <h2 className="Skills_heading">What My Programming Skills Included?</h2>
        <p className="skills_desc">
          I specialize in creating intuitive and responsive web interfaces using
          HTML, CSS, and JavaScript, working closely with backend teams to
          integrate via RESTful APIs.
        </p>
        <div className="switchingTabs">
          {/* Map through categories to create tab buttons */}
          <div className="tabItems">
            {["Skills", "Tools"].map((cat, index) => (
              <button
                key={index}
                className={`tabItem ${selectedTab === index ? "active" : ""}`}
                onClick={() => handleTabClick(cat, index)}
              >
                {cat}
              </button>
            ))}
            <span className="movingBg" style={{ left }} />
          </div>
        </div>
      </Col>

      {/* Render skills based on category */}
      <Col lg={6} sm={12}>
        <div className="skills__container d-grid">
          {filteredSkills.map(({ title, img }, index) => (
            <Col key={index}>
              <div
                className="img"
                data-aos="fade-down"
                data-aos-anchor-placement="top-left"
                data-aos-duration="900"
                data-text={title}
              >
                <img src={img} alt={title} className="Skills_img" />
              </div>
            </Col>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default Skills;
