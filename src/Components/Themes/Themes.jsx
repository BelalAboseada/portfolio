
import { FaTimes } from "react-icons/fa";
import { themes } from "../../data";
import "./theme.scss";
import ThemeItem from "../themeItem";
import { useEffect, useState } from "react";
import UseAnimations from 'react-useanimations';
import settings from 'react-useanimations/lib/settings'


const GetStorageColor = () => {
  let Color = 'hsl(271, 76%, 53%)';
  if (localStorage.getItem('Color')) {
    Color = localStorage.getItem('Color');
  }
  return Color;

}
const Themes = () => {
  const [Show_switcher, SetShow_switcher] = useState(false)
  const [Color, SetColor] = useState(GetStorageColor())


  const ChangeColor = (Color) => {
    SetColor(Color)
    localStorage.setItem('Color', Color)
  }

  useEffect(() => {
    document.documentElement.style.setProperty('--first-color', Color)
  }, [Color])
  return (
    <div>
      <div className={`${Show_switcher ? 'Show_switcher' : ''} Style_Switcher position-fixed`}>
        <div className="theme_toggler position-absolute d-grid" onClick={() => SetShow_switcher(!Show_switcher)} >
          <UseAnimations animation={settings} className="Switcher_icon" />
        </div>
        <h3 className="Switcher_title">Style Switcher</h3>
        <div className="style_switcher_item d-grid">
          {themes.map((theme, index) => {
            return <ThemeItem key={index} {...theme} ChangeColor={ChangeColor} />;
          })}
        </div>
        <div className="Switcher_Close" onClick={() => SetShow_switcher(!Show_switcher)}>
          <FaTimes className="Switcher_icon" />
        </div>
      </div>
    </div>
  );
};

export default Themes;
