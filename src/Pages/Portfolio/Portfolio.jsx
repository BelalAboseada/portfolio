import { portfolio } from "../../data";
import Card from "../../Components/Card/Card";
import "./Style.scss";

const Portfolio = () => {
  return (   
      <section className="portfolio section">
        <h2 className="section__title">
          My <span>Portfolio</span>
        </h2>
        <div className="Portfolio__container d-grid">
          {portfolio.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </section>
  
    
  );
};

export default Portfolio;
