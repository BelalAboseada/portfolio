import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Card = ({ id, img, title, details }) => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <motion.div className="Portfolio_item" layout>
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
      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            {/* Assuming item is not defined, you should use props */}
            <motion.h5>{details}</motion.h5>
            <motion.h2>{title}</motion.h2>
            <motion.button onClick={() => setSelectedId(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Card;
