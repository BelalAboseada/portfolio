import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import "./Card.scss";

const Card = ({ id, img, title, details, tech }) => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <motion.div
        layoutId={id}
        onClick={() => setSelectedId(id)}
        className="Portfolio_item"
        layout
      >
        <motion.img
          src={img}
          loading="lazy"
          type="image/webp"
          className="Portfolio_img"
          alt={title}
          layoutId={`image-${id}`}
        />
        <div className="Portfolio_hover position-absolute d-grid">
          <h3 className="Portfolio_title">{title}</h3>
        </div>
      </motion.div>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            key="modal"
            className="modal_overlay"
            initial={{ opacity: 0.5, y: "-0%", x: "-50%" }}
            animate={{ opacity: 1, y: "-50%" }}
            exit={{ opacity: 0, x: "-50%", y: "-0%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.button
              className="Modal_close"
              onClick={() => setSelectedId(null)}
            >
              <IoClose />
            </motion.button>
            <motion.div className="modal_content">
              <motion.img
                src={img}
                loading="lazy"
                type="image/webp"
                className="modal_img"
                alt={title}
              />
              <motion.h3
                className="modal_title text-center"
              
              >
                {title}
              </motion.h3>
              <div className="modal_list  d-grid">
                {details.map((detail, index) => (
                  <div key={index} className="modal_item">
                    <span>{detail.icon}</span>
                    <h6 className="item_title">{detail.title}</h6>
                    <div className="item_details">
                      <a>{detail.desc}</a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
