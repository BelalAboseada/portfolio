<<<<<<< HEAD
import { personalInfo } from "../../../data";

const Info = () => {
  return (
    <>
      {personalInfo.map(({ title, description }, index) => {
        return (
          <li className="info__item my-1" key={index}>
            <span className="info__title">{title}</span>
            <span className="info__description">{description}</span>
          </li>
        );
      })}
    </>
  );
};

export default Info;
=======
import { personalInfo } from "../../../data";

const Info = () => {
  return (
    <>
      {personalInfo.map(({ title, description }, index) => {
        return (
          <li className="info__item my-1" key={index}>
            <span className="info__title">{title}</span>
            <span className="info__description">{description}</span>
          </li>
        );
      })}
    </>
  );
};

export default Info;
>>>>>>> 61b7dec643d5f99903dc1bd44e8f63c4cfbbabc0
