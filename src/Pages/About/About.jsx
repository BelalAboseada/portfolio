import Stats from "./stats/Stats";
import "./style.scss";
import Skills from "./Skills/Skills";
import Info from "./info/Info";

function About() {
  return (
    <main className="section container">
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
    </main>
  );
}

export default About;
