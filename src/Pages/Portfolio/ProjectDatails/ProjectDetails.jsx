import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { portfolioData as portfolio } from "../../../data.jsx";
import { generateSlug } from "../../../utils/slugGenerator.js";

const ProjectDetails = () => {
  const { title } = useParams();
  const project = portfolio.find(
    (project) => generateSlug(project.title) === title
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div
      className={styles["Project-details"]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles["backdrop-img"]}>
        <img
          src={project.img}
          alt={project.title}
          className={styles["backdrop-image"]}
        />
        <div className={styles["gradient-overlay"]} />
      </div>

      <div className={styles.content}>
        <div className={styles.left}>
          <motion.div
            className={styles.breadcrumb}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <span className={styles.breadcrumbDivider}>/</span>
            <Link to="/portfolio" className={styles.breadcrumbLink}>
              Projects
            </Link>
            <span className={styles.breadcrumbDivider}>/</span>
            <span className={styles.currentProject}>{project.title}</span>
          </motion.div>
          <motion.img
            className={styles["poster-img"]}
            src={project.img}
            alt="PosterFallBack"
            loading="lazy"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <motion.div
          className={styles.right}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h4 className={styles.title}>{project.title}</h4>
            <p className={styles.subtitle}>{project.desc}</p>
          </motion.div>

          <motion.div className={styles.overview} variants={itemVariants}>
            <p className={styles.heading}>ـــــ Overview </p>
            <motion.ul className={styles.description}>
              {project.Overview.map((item, index) => (
                <motion.li key={index} variants={itemVariants} custom={index}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div className={styles.links} variants={itemVariants}>
            <p className={styles.heading}>____ Links</p>
            <motion.ul>
              {project.details.map((item, index) => (
                <motion.li
                  key={index}
                  className={styles.link}
                  variants={itemVariants}
                  custom={index}
                >
                  <motion.span
                    className={styles["icon-link"]}
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.icon}
                  </motion.span>
                  <h6 className={styles["title-link"]}>{item.title}</h6>
                  <motion.a
                    href={item.desc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles["animated-link"]}
                    whileHover={{ x: 5 }}
                  >
                    {item.desc.title}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
