import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

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
        <div className="position-relative">
          <motion.img
            src={img}
            loading="lazy"
            type="image/webp"
            className="Portfolio_img"
            alt={title}
            layoutId={`image-${id}`}
          />
        </div>
        <h3 className="Portfolio_title">{title}</h3>
      </motion.div>

      {/* <AnimatePresence>
        {selectedId && (
          <motion.div
            key={id} // Ensure uniqueness
            className="modal_overlay"
            initial={{ opacity: 0, y: "-10%" }}
            animate={{ opacity: 1, y: "-50%" }}
            exit={{ opacity: 0, y: "-10%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={() => setSelectedId(null)} // Close when clicking outside
          >
            <motion.div
              className="modal_content"
              onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
            >
              <motion.button
                className="Modal_close"
                onClick={() => setSelectedId(null)}
              >
                <IoClose />
              </motion.button>
              <motion.img
                src={img}
                loading="lazy"
                type="image/webp"
                className="modal_img"
                alt={title}
                layoutId={`image-${id}`} // Ensure animation consistency
              />
              <motion.h3 className="modal_title text-center">{title}</motion.h3>
              <div className="modal_list d-grid">
                {details?.map((detail, index) => (
                  <div key={index} className="modal_item">
                    <span>{detail.icon}</span>
                    <h6 className="item_title">{detail.title}</h6>
                    <div className="item_details">
                      <a href={detail.desc}>{detail.desc}</a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </>
  );
};

export default Card;
