<<<<<<< HEAD
import { stats } from "../../../data";
import parse from "html-react-parser";

const Stats = () => {
  return (
    <>
      {stats.map(({ no, title }, index) => (
        <div className="stats__box" key={index}>
          <h3 className="stats__no">{no}</h3>
          <p className="stats__title">{parse(title)}</p>
        </div>
      ))}
    </>
  );
};

export default Stats;
=======
import { stats } from "../../../data";
import parse from "html-react-parser";

const Stats = () => {
  return (
    <>
      {stats.map(({ no, title }, index) => (
        <div className="stats__box" key={index}>
          <h3 className="stats__no">{no}</h3>
          <p className="stats__title">{parse(title)}</p>
        </div>
      ))}
    </>
  );
};

export default Stats;
>>>>>>> 61b7dec643d5f99903dc1bd44e8f63c4cfbbabc0
