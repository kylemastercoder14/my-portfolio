import React from "react";
import {
  MdOutlineLocationOn,
  MdWorkOutline,
  MdLaptopChromebook,
} from "react-icons/md";

import { useTheme } from "../ThemeProvider";

const About = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <div className={`${theme !== "light" ? "bg-surfaceContainerLowDark text-onSurfaceVariantDark" : "bg-surfaceContainerLowLight text-onSurfaceVariantLight"} m-[16px] p-[16px] rounded-shapeCornerLarge shadow-lg`}>
        <h2 className={`${theme !== "light" ? "text-onSurfaceDark" : "text-onSurfaceLight"} font-semibold`}>About</h2>
        <p className={`my-[12px] py-[12px] border-y ${theme !== "light" ? "border-outlineVariantDark" : "border-outlineVariantLight"}`}>
          As a web developer, I thrive on turning ideas into functional and innovative applications.
        </p>

        <ul className="grid gap-[12px]">
          <li className="flex items-center gap-[4px]">
            <MdOutlineLocationOn />
            <p>Cavite, Philippines</p>
          </li>
          <li className="flex items-center gap-[6px]">
            <MdWorkOutline />
            <p>Freelancer</p>
          </li>
          <li className="flex items-center gap-[6px]">
            <MdLaptopChromebook />
            <p>Information System</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
