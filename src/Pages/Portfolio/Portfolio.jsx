import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData as portfolio } from "../../data";
// import Card from "../../Components/Card/Card";
import "./Style.scss";
import { ProjectCard } from "../../Components/Card/ProjectCard";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredPortfolio = selectedCategory
    ? portfolio.filter((item) => item.category === selectedCategory)
    : portfolio;

  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span>Portfolio</span>
      </h2>
      <div className="category-buttons d-flex justify-content-center align-items-center">
        <button
          className={!selectedCategory ? "active" : ""}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        <button
          className={selectedCategory === "React" ? "active" : ""}
          onClick={() => setSelectedCategory("React")}
        >
          React
        </button>
        <button
          className={selectedCategory === "JS" ? "active" : ""}
          onClick={() => setSelectedCategory("JS")}
        >
          JavaScript
        </button>
        <button
          className={selectedCategory === "HTML & CSS" ? "active" : ""}
          onClick={() => setSelectedCategory("HTML & CSS")}
        >
          Html&Css
        </button>
      </div>

      <motion.div className="Portfolio__container d-grid" layout>
        <AnimatePresence>
          {filteredPortfolio.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <ProjectCard {...item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Portfolio;
