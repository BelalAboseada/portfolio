import Stats from "./stats/Stats";
import "./style.scss";
import Skills from "./Skills/Skills";
import Info from "./info/Info";
import InternetConnection from "../../servies/internetConnection";
import { useState } from "react";
import ContentLoader from "../../Components/Loader/contentLoader";

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
        <ContentLoader />
      )}
    </main>
  );
}

export default About;
