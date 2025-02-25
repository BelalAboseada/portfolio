import { Link } from "react-router-dom";
import styles from "./Style.module.scss";
import { generateSlug } from "../../utils/slugGenerator";

export const ProjectCard = ({ title, img, id }) => (
  <div className={styles.Card}>
    <Link to={`/ProjectDetails/${generateSlug(title)}`}>
      <img className={styles.Card_image} src={img} alt={title} />
      <h3 className={styles.Card_title}>{title}</h3>
    </Link>
  </div>
);


