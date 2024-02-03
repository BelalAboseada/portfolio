<<<<<<< HEAD
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="Portfolio_item">
      <img src={img}  loading="lazy" type="image/webp" className="Portfolio_img"/>

      <div className="Portfolio_hover position-absolute d-grid" onClick={toggleModal} >
        <h3 className="Portfolio_title">{title}</h3>
        {modal && (
          <div className="Portfolio_modal position-fixed d-grid">
            <div className="Portfolio_modal_content position-relative d-grid">
              <FaTimes className="Close_modal position-absolute" onClick={toggleModal} />
              <h3 className="modal_title">{title}</h3>
              <ul className="modal_list d-grid">
                {details.map(({ icon, title, desc }, index) => {
                  return (
                    <li className="modal_item d-flex align-items-center" key={index}>
                      <span className="item_icon d-flex">{icon}</span>
                      <div>
                        <span className="item_title">{title}</span>
                        <span className="item_details">{desc}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <img src={img} alt="" className="img_modal" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

=======
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="Portfolio_item">
      <LazyLoadImage src={img} loading="lazy" effect="blur" type="image/webp" className="Portfolio_img"/>

      <div className="Portfolio_hover position-absolute d-grid" onClick={toggleModal} >
        <h3 className="Portfolio_title">{title}</h3>
        {modal && (
          <div className="Portfolio_modal position-fixed d-grid">
            <div className="Portfolio_modal_content position-relative d-grid">
              <FaTimes className="Close_modal position-absolute" onClick={toggleModal} />
              <h3 className="modal_title">{title}</h3>
              <ul className="modal_list d-grid">
                {details.map(({ icon, title, desc }, index) => {
                  return (
                    <li className="modal_item d-flex align-items-center" key={index}>
                      <span className="item_icon d-flex">{icon}</span>
                      <div>
                        <span className="item_title">{title}</span>
                        <span className="item_details">{desc}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <img src={img} alt="" className="img_modal" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

>>>>>>> 61b7dec643d5f99903dc1bd44e8f63c4cfbbabc0
export default Card;