import { portfolio } from "../../data";
import Card from "../../Components/Card/Card";
import { motion } from "framer-motion";
import "./Style.scss";

const Portfolio = () => {
  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span>Portfolio</span>
      </h2>
      <motion.div className="Portfolio__container d-grid" layout>
        {portfolio.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;
