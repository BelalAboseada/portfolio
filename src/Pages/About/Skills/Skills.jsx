<<<<<<< HEAD
import { useEffect, useState } from "react";
import { skills } from "../../../data";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useLocation } from "react-router-dom";

const Skills = () => {
  const location = useLocation();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);

      // Check if the scroll position is greater than or equal to 150
      if (scrollPosition >= 250) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <>
      {skills.map(({ title, percentage }, index) => {
        return (
          <div className="progress__box" key={index}>
            <div className="progress__circle">
              <CircularProgressbar
                value={animate ? percentage : 0}
                strokeWidth={7.5}
                text={`${animate ? percentage : 0}%`}
              />
            </div>
            <h3 className="skills__title">{title}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Skills;
=======
import { useEffect, useState } from "react";
import { skills } from "../../../data";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useLocation } from "react-router-dom";

const Skills = () => {
  const location = useLocation();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);

      // Check if the scroll position is greater than or equal to 150
      if (scrollPosition >= 250) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <>
      {skills.map(({ title, percentage }, index) => {
        return (
          <div className="progress__box" key={index}>
            <div className="progress__circle">
              <CircularProgressbar
                value={animate ? percentage : 0}
                strokeWidth={7.5}
                text={`${animate ? percentage : 0}%`}
              />
            </div>
            <h3 className="skills__title">{title}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Skills;
>>>>>>> 61b7dec643d5f99903dc1bd44e8f63c4cfbbabc0
