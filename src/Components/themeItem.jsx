import React from "react";

const ThemeItem = ({ color, img, ChangeColor }) => {
  return <img src={img} className="theme_img" onClick={() => ChangeColor(color)} />;
};

export default ThemeItem;
