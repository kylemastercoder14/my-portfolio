import React from "react";

import { useTheme } from "../ThemeProvider";

const Footer = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <footer>
      <div className={`text-center p-[16px] border-t ${theme === "light" ? "border-outlineVariantLight" : "border-outlineVariantDark"}`}>
        <p className={`text-md ${theme === "light" ? "text-onSurfaceLight" : "text-onSurfaceDark"}`}>
          &copy; 2023. All right reserved by{" "}
          <span className={`${theme === "light" ? "text-primaryLight" : "text-primaryDark"} font-bold`}>Kyle Andre Lim</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
