import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio } from "../../data";
import Card from "../../Components/Card/Card";
import "./Style.scss";
import InternetConnection from "../../servies/internetConnection";
import ContentLoader from "../../Components/Loader/LoaderNetwork";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Filtered portfolio based on selected category
  const filteredPortfolio = selectedCategory
    ? portfolio.filter((item) => item.category === selectedCategory)
    : portfolio;

  return (
    <section className="portfolio section">
      <InternetConnection setIsLoading={setIsLoading} />

      {!isLoading ? (
        <>
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
              className={selectedCategory === "js" ? "active" : ""}
              onClick={() => setSelectedCategory("js")}
            >
              JavaScript
            </button>
            <button
              className={selectedCategory === "Html&Css" ? "active" : ""}
              onClick={() => setSelectedCategory("Html&Css")}
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
                  <Card {...item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </>
      ) : (
        <ContentLoader />
      )}
    </section>
  );
};

export default Portfolio;
