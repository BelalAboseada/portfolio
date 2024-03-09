import "./style.scss";
import { motion } from "framer-motion";

const Loader = ({ initial }) => {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  };

  return (
    <div className={`loadingSpinner ${initial ? "initial" : ""}`}>
      <div className={`svg-frame`}>
        <svg
        className="B-loader"
          fill="#ffffff"
          height="200px"
          width="200px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 202 202"
          xmlSpace="preserve"

        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <motion.path
              style={{ fill:"hsl(0, 1%, 17%)" }}
              d="M148.004,94.812c18.332-8.126,28.671-23.362,28.671-42.752c0-17.261-6.954-31.206-20.11-40.328 C145.653,4.166,130.438,0,113.721,0H16.957v34h17v134h-17v34h90.905c14.819,0,35.992-2.245,52.705-12.94 c16.241-10.393,24.476-26.161,24.476-46.868C185.043,118.342,171.057,100.763,148.004,94.812z M103.12,80H73.957V34h26.096 c25.961,0,36.551,6.34,36.551,21.884C136.604,75.816,118.396,80,103.12,80z M73.957,115h30.838c28.537,0,40.177,7.436,40.177,25.663 c0,18.14-13.987,27.337-41.572,27.337H73.957V115z"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 4.5, ease: "easeInOut" },
                fill: { duration: 4.5, ease: [1, 0, 0.8, 1] },
              }}
            ></motion.path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
