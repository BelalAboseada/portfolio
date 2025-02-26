import { FaTimes } from "react-icons/fa";
import { themes } from "../../data";
import "./theme.scss";
import ThemeItem from "../themeItem";
import { useCallback, useEffect, useMemo, useState } from "react";
import UseAnimations from "react-useanimations";
import settings from "react-useanimations/lib/settings";

// Local storage

const STORAGE_KEY = "Color";
const DEFAULT_COLOR = "hsl(271, 76%, 53%)";

const getInitialColor = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_COLOR;
  } catch (error) {
    console.error("LocalStorage access error:", error);
    return DEFAULT_COLOR;
  }
};
const Themes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const initialColor = useMemo(getInitialColor, []);
  const [Color, SetColor] = useState(initialColor);

  const handleColorChange = useCallback((newColor) => {
    SetColor(newColor);
    try {
      localStorage.setItem(STORAGE_KEY, newColor);
    } catch (error) {
      console.error("Failed to save theme:", error);
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--first-color", Color);
  }, [Color]);
  return (
    <div>
      <div
        className={`${
          isVisible ? "Show_switcher" : ""
        } Style_Switcher position-fixed`}
      >
        <div
          className="theme_toggler position-absolute d-grid"
          onClick={() => setIsVisible(!isVisible)}
          aria-expanded={isVisible}
        >
          <UseAnimations animation={settings} className="Switcher_icon" />
        </div>
        <h6 className="Switcher_title"> Choose Your Fav Color :</h6>
        <div className="style_switcher_item d-grid">
          {themes.map((theme, index) => {
            return (
              <ThemeItem
                key={index}
                {...theme}
                ChangeColor={handleColorChange}
              />
            );
          })}
        </div>
        <div
          className="Switcher_Close"
          onClick={() => setIsVisible(!isVisible)}
          aria-label="Close theme picker"
        >
          <FaTimes className="Switcher_icon" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};

export default Themes;
