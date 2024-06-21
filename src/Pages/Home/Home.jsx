
import { Link } from "react-router-dom";
import "./style.scss";
import ParticlesComponent from "../../Components/particles/particles";
function Home() {
  return (
    <section className="Home d-flex align-items-center justify-content-sm-center">
      <div className="container">
        <div className="row">
          <div
            className="home-data col-lg-6"
            data-aos="fade-right"
             data-aos-duration="500"
          >
            <h1 className="title">
              <span>I am Belal Hesham</span>  Web developer.
            </h1>
            <p className="home-description">
              I am Egyption based Web developer & Frontend developer focused on
              crafting clean & user-friendly experience,I am passionate about
              building excellent software that improves the lives of those
              around me.
            </p>
            <Link to="/about" className="Btn">
              <span>More about me </span>
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          <ParticlesComponent />
        </div>
      </div>
    </section>
  );
}

export default Home;
