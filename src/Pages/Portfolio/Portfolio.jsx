import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData as portfolio } from "../../data";
// import Card from "../../Components/Card/Card";
import "./Style.scss";
import { ProjectCard } from "../../Components/Card/ProjectCard";
import { useMemo } from "react";
import { CategoryButtons } from "../../Components/CatButton/CatButton";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Memoize filtered results
  const filteredPortfolio = useMemo(
    () =>
      selectedCategory
        ? portfolio.filter((item) => item.category === selectedCategory)
        : portfolio,
    [selectedCategory]
  );

  // Memoize categories
  const categories = useMemo(
    () => ["All", ...new Set(portfolio.map((item) => item.category))],
    [portfolio]
  );

  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span>Portfolio</span>
      </h2>
      <div
        role="tablist"
        aria-label="Project categories"
        className="category-buttons d-flex justify-content-center align-items-center"
      >
        {" "}
        <CategoryButtons
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      <motion.div className="Portfolio__container d-grid" layout>
        <AnimatePresence mode="wait">
          {filteredPortfolio.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              whileTap={{ scale: 0.95 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "100px" }}
            >
              <ProjectCard {...item} />
            </motion.div>
          ))}
        </AnimatePresence>
        {filteredPortfolio.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="empty-state"
          >
            No projects found in this category
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Portfolio;
