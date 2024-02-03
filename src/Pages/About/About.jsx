<<<<<<< HEAD
import Info from "./info/Info";
import Stats from "./stats/Stats";
import "./style.scss";
import Skills from "./Skills/Skills";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="section container">
      <section className="About">
        <h2 className="section__title"> 
          About <span>Me</span>
        </h2>
        <div className="about__container d-grid">
          <div
            className="about__info d-grid"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <h2 className="subTitle">Personal Infos</h2>
            <ul className="info__list d-grid">
              <Info />
            </ul>
            <Link
              to="https://drive.google.com/file/d/1nA7UsMy4oNp2IbepNRGW7QOPDgM9nsa4/view?pli=1"
              className="button"
              target="_blank"
              data-tooltip="CV"
            >
              <div className="button-wrapper">
                <div className="text">Download CV</div>
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="2em"
                    height="2em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                    ></path>
                  </svg>
                </span>
              </div>
            </Link>
          </div>
          <div
            className="stats d-grid"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <Stats />
          </div>
        </div>
      </section>
      <div className="separator"></div>
      <section className="skills">
        <h3 className="subTitle text-center mb-5">My Skills</h3>
        <div className="skills__container d-grid">
          <Skills />
        </div>
      </section>
    </main>
  );
}

export default About;
=======
import Info from "./info/Info";
import Stats from "./stats/Stats";
import "./style.scss";
import Skills from "./Skills/Skills";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="section container">
      <section className="About">
        <h2 className="section__title"> 
          About <span>Me</span>
        </h2>
        <div className="about__container d-grid">
          <div
            className="about__info d-grid"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <h2 className="subTitle">Personal Infos</h2>
            <ul className="info__list d-grid">
              <Info />
            </ul>
            <Link
              to="https://storage.googleapis.com/rezi-temp-download/0.cv48y79hv81700744457.pdf"
              className="button"
              target="_blank"
              data-tooltip="CV"
            >
              <div className="button-wrapper">
                <div className="text">Download CV</div>
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="2em"
                    height="2em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                    ></path>
                  </svg>
                </span>
              </div>
            </Link>
          </div>
          <div
            className="stats d-grid"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <Stats />
          </div>
        </div>
      </section>
      <div className="separator"></div>
      <section className="skills">
        <h3 className="subTitle text-center mb-5">My Skills</h3>
        <div className="skills__container d-grid">
          <Skills />
        </div>
      </section>
    </main>
  );
}

export default About;

>>>>>>> 61b7dec643d5f99903dc1bd44e8f63c4cfbbabc0
