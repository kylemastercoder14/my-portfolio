import React from 'react';

import { useTheme } from "../ThemeProvider";

const ProjectList = ({ useProjectsData }) => {
    const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <div className="overflow-hidden bg-transparent grid md:grid-cols-2 items-center gap-[24px]">
          {useProjectsData.map((item) => (
            <div key={item.id} className="grid grid-cols-1 gap-[12px]">
              <div
                className={`p-[18px] ${
                  theme === "light"
                    ? "bg-surfaceContainerLight"
                    : "bg-surfaceContainerDark"
                } rounded-shapeCornerMedium shadow-lg`}
              >
                <figure>
                  <img src={item.imageUrl} alt="" />
                </figure>
                <div className="flex flex-col items-start justify-start mt-2">
                  <p
                    className={`text-sm ${
                      theme === "light"
                        ? "text-onSurfaceVariantLight"
                        : "text-onSurfaceVariantDark"
                    }`}
                  >
                    {item.label}
                  </p>
                  <h3
                    className={`text-base font-semibold ${
                      theme === "light"
                        ? "text-onSurfaceLight"
                        : "text-onSurfaceDark"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <div>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default ProjectList
