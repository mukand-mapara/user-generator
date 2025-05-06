import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/theme/themeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className="text-center flex justify-start">
      <button
        onClick={() => dispatch(toggleDarkMode())}
        className="px-4 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 mt-2 ml-3"
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
