import React from "react";
import { MdFileDownload, MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

import Hero from "../images/kyle.jpg";
import { useTheme } from "../ThemeProvider";

const MainContainer = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <section className={`p-sectionPadding hero mt-[5rem] ${theme === "light" ? "bg-backgroundLight" : "bg-backgroundDark"}`}>
      <div className="overflow-hidden bg-transparent flex flex-col md:flex-row gap-[24px]">
        <figure className="w-[240px] h-[240px]">
          <img
            src={Hero}
            alt="Kyle Andre Lim"
            className="w-full h-full object-cover rounded-shapeCornerCircle"
          />
        </figure>

        <div className="max-w-[500px]">
          <div className={`${theme === "light" ? "text-onSurfaceVariantLight" : "text-onSurfaceVariantDark"}`}>Web Developer</div>
          <h1 className={`text-3xl font-weightMedium my-[5px] ${theme === "light" ? "text-onSurfaceLight" : "text-onSurfaceDark"}`}>Kyle Andre Lim</h1>
          <p className={`${theme === "light" ? "text-onSurfaceVariantLight" : "text-onSurfaceVariantDark"} mb-[10px] text-[14px]`}>
          I am an Information System student with expertise in creating top-notch digital experiences. My current focus is on developing products that are accessible and centered around user needs.
          </p>

          <div className="flex flex-wrap gap-[8px]">
            <Link to={"mailto:kylemastercoder14@gmail.com"} className={`h-[32px] max-w-max flex justify-center items-center gap-[8px] p-[16px] border border-outlineLight rounded-shapeCornerSmall ${theme !== "light" ? "text-onSurfaceVariantDark hover:bg-surfaceContainerLowDark" : "text-onSurfaceVariantLight hover:bg-surfaceContainerLowLight"}`}>
              <MdOutlineEmail className="text-[1.3rem]" />
              <p>kylemastercoder14@gmail.com</p>
            </Link>
            <a href="/resume.pdf" download="KyleAndreLimResume.pdf" className={`h-[32px] max-w-max flex justify-center items-center gap-[8px] p-[16px] border border-outlineLight rounded-shapeCornerSmall ${theme !== "light" ? "text-onSurfaceVariantDark hover:bg-surfaceContainerLowDark" : "text-onSurfaceVariantLight hover:bg-surfaceContainerLowLight"}`}>
              <MdFileDownload className="text-[1.3rem]" />
              <p>Download Resume</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContainer;
