import React from "react";

import Header from "./Header";
import MainContainer from "./MainContainer";
import About from "./About";
import { useTheme } from "../ThemeProvider";
import PrimaryTabs from "./PrimaryTabs";
import Footer from "./Footer";

const BodyContainer = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={`w-screen h-auto flex flex-col ${
        theme !== "light" ? "bg-backgroundDark" : "bg-backgroundLight"
      }`}
    >
      <Header />
      <main>
        <article className="md:px-20 px-1">
          <MainContainer />
          <div className="flex md:flex-row flex-col">
            <About />
            <PrimaryTabs />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BodyContainer;
