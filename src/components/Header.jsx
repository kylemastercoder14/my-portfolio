import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import { useTheme } from "../ThemeProvider";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`fixed top-0 ${
        theme === "light" ? "bg-backgroundLight" : "bg-backgroundDark"
      } left-0 w-full h-topBarHeight flex justify-between px-4 py-4 z-[4] shadow-lg`}
    >
        {theme === "light" ? (
          <a href="/" className="flex items-center justify-center gap-2">
            <svg
              width="35"
              height="35"
              viewBox="0 0 49 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="favicon">
                <rect width="48.0508" height="48" rx="9.60508" fill="#111" />
                <g id="Icon">
                  <path
                    id="Vector"
                    d="M17.5038 20.0022L12.0186 23.4269V24.5776L17.5038 28.0022L18.2169 26.8515L13.6641 24.0022L18.2169 21.1529L17.5038 20.0022Z"
                    fill="#fff"
                  />
                  <path
                    id="Vector_2"
                    d="M30.5588 20.0021L29.8457 21.1528L34.3985 24.0021L29.8457 26.8514L30.5588 28.0021L36.044 24.5774V23.4267L30.5588 20.0021Z"
                    fill="#fff"
                  />
                  <path
                    id="Vector_3"
                    d="M24.0312 25.372C24.7886 25.372 25.4025 24.7587 25.4025 24.0021C25.4025 23.2455 24.7886 22.6322 24.0312 22.6322C23.2739 22.6322 22.6599 23.2455 22.6599 24.0021C22.6599 24.7587 23.2739 25.372 24.0312 25.372Z"
                    fill="#fff"
                  />
                  <path
                    id="Vector_4"
                    d="M28.1452 25.372C28.9026 25.372 29.5166 24.7587 29.5166 24.0021C29.5166 23.2455 28.9026 22.6322 28.1452 22.6322C27.3879 22.6322 26.7739 23.2455 26.7739 24.0021C26.7739 24.7587 27.3879 25.372 28.1452 25.372Z"
                    fill="#fff"
                  />
                  <path
                    id="Vector_5"
                    d="M19.9172 25.372C20.6746 25.372 21.2885 24.7587 21.2885 24.0021C21.2885 23.2455 20.6746 22.6322 19.9172 22.6322C19.1599 22.6322 18.5459 23.2455 18.5459 24.0021C18.5459 24.7587 19.1599 25.372 19.9172 25.372Z"
                    fill="#fff"
                  />
                </g>
              </g>
            </svg>
            <p className={`font-bold text-lg ${theme === "light" ? "text-onBackgroundLight" : "text-onBackgroundDark"}`}>Kyle's Portfolio</p>
          </a>
        ) : (
          <a href="/" className="flex items-center justify-center gap-2">
            <svg
              width="35"
              height="35"
              viewBox="0 0 49 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="favicon">
                <rect width="48.0508" height="48" rx="9.60508" fill="#fff" />
                <g id="Icon">
                  <path
                    id="Vector"
                    d="M17.5038 20.0022L12.0186 23.4269V24.5776L17.5038 28.0022L18.2169 26.8515L13.6641 24.0022L18.2169 21.1529L17.5038 20.0022Z"
                    fill="#111"
                  />
                  <path
                    id="Vector_2"
                    d="M30.5588 20.0021L29.8457 21.1528L34.3985 24.0021L29.8457 26.8514L30.5588 28.0021L36.044 24.5774V23.4267L30.5588 20.0021Z"
                    fill="#111"
                  />
                  <path
                    id="Vector_3"
                    d="M24.0312 25.372C24.7886 25.372 25.4025 24.7587 25.4025 24.0021C25.4025 23.2455 24.7886 22.6322 24.0312 22.6322C23.2739 22.6322 22.6599 23.2455 22.6599 24.0021C22.6599 24.7587 23.2739 25.372 24.0312 25.372Z"
                    fill="#111"
                  />
                  <path
                    id="Vector_4"
                    d="M28.1452 25.372C28.9026 25.372 29.5166 24.7587 29.5166 24.0021C29.5166 23.2455 28.9026 22.6322 28.1452 22.6322C27.3879 22.6322 26.7739 23.2455 26.7739 24.0021C26.7739 24.7587 27.3879 25.372 28.1452 25.372Z"
                    fill="#111"
                  />
                  <path
                    id="Vector_5"
                    d="M19.9172 25.372C20.6746 25.372 21.2885 24.7587 21.2885 24.0021C21.2885 23.2455 20.6746 22.6322 19.9172 22.6322C19.1599 22.6322 18.5459 23.2455 18.5459 24.0021C18.5459 24.7587 19.1599 25.372 19.9172 25.372Z"
                    fill="#111"
                  />
                </g>
              </g>
            </svg>
            <p className={`font-bold text-lg ${theme === "light" ? "text-onBackgroundLight" : "text-onBackgroundDark"}`}>Kyle's Portfolio</p>
          </a>
        )}

      <div className="grid place-items-center w-10 h-10">
        <div>
          {theme === "light" ? (
            <MdDarkMode
              onClick={toggleTheme}
              className={`w-[1em] h-[1em] block cursor-pointer ${
                theme === "light" ? "text-onSurfaceLight" : "text-onSurfaceDark"
              }`}
            />
          ) : (
            <MdLightMode
              onClick={toggleTheme}
              className={`w-[1em] h-[1em] block cursor-pointer ${
                theme === "light" ? "text-onSurfaceLight" : "text-onSurfaceDark"
              }`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
