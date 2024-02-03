<<<<<<< HEAD

const ThemeItem = ({ color, img, ChangeColor }) => {
  return <img src={img} className="theme_img" onClick={() => ChangeColor(color)} />;
};

export default ThemeItem;
=======
import React from "react";

const ThemeItem = ({ color, img, ChangeColor }) => {
  return <img src={img} className="theme_img" onClick={() => ChangeColor(color)} />;
};

export default ThemeItem;
>>>>>>> 61b7dec643d5f99903dc1bd44e8f63c4cfbbabc0
