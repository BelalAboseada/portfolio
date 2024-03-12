const ThemeItem = ({ color, img, ChangeColor }) => {
  return (
    <img src={img} alt="color_item" className="theme_img" onClick={() => ChangeColor(color)} />
  );
};

export default ThemeItem;
