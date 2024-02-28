import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Card = ({ id,img, title, details }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="Portfolio_item">
      <img
        src={img}
        loading="lazy"
        type="image/webp"
        className="Portfolio_img"
        alt={title}
      />
      <div className="Portfolio_hover position-absolute d-grid">
        <h3 className="Portfolio_title">{title}</h3>
        <div className="Btns">
          <button className="Quick_Btn" onClick={toggleModal}>
            Quick View <IoIosArrowForward />
          </button>
          <Link to={`/ProjectDetails/${id}`}  className="details_Btn">
            Details <IoIosArrowForward />
          </Link>
        </div>
        {modal && (
          <div className="Portfolio_modal position-fixed d-grid">
            <div className="Portfolio_modal_content position-relative d-grid">
              <FaTimes
                className="Close_modal position-absolute"
                onClick={toggleModal}
              />
              <h3 className="modal_title">{title}</h3>
              <ul className="modal_list d-grid">
                {details.map(({ icon, title, desc }, index) => (
                  <li className="modal_item d-flex align-items-center" key={index}>
                    <span className="item_icon d-flex">{icon}</span>
                    <div>
                      <span className="item_title">{title}</span>
                      <span className="item_details">{desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <img src={img} alt={title} className="img_modal" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
