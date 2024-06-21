import Stats from "./stats/Stats";
import "./style.scss";
import Skills from "./Skills/Skills";
import Info from "./info/Info";
import InternetConnection from "../../servies/internetConnection";
import Loader from "../../Components/Loader/contentLoader";
import { useState } from "react";

function About() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className="section container">
      <InternetConnection setIsLoading={setIsLoading} />
      {!isLoading ? (
        <section className="About">
          <h2 className="section__title">
            About <span>Me</span>
          </h2>
          <div className="about__container">
            <section className="Info">
              <Info />
            </section>
            <section className="stats">
              <Stats />
            </section>
          </div>
          <section className="skills">
            <div className="grid">
              <Skills />
            </div>
          </section>
        </section>
      ) : (
        <Loader />
      )}
    </main>
  );
}

export default About;
