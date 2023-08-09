import React, { useRef, useState } from "react";
import {
  MdFacebook,
  MdHome,
  MdOutlineEmail,
  MdOutlinePhone,
} from "react-icons/md";
import { AiFillGithub, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import emailjs from "@emailjs/browser";

import { useTheme } from "../ThemeProvider";
import ProjectList from "./ProjectList";
import Pagination from "./Pagination";
import Project1 from "../images/project-1.png";
import Project2 from "../images/project-2.png";
import Project8 from "../images/project-8.png";
import Project4 from "../images/project-4.png";
import Project5 from "../images/project-5.png";
import Project6 from "../images/project-6.png";
import Project7 from "../images/project-7.png";
import HtmlImg from "../images/html5.svg";
import CssImg from "../images/css3.svg";
import ReactImg from "../images/react.js.svg";
import MongoImg from "../images/mongoDB.svg";
import GithubImg from "../images/github.svg";
import VsImg from "../images/VS_code.svg";
import NextJs from "../images/next-js-icon-seeklogo.com.svg";
import Typescript from "../images/typescript-seeklogo.com.svg";
import Git from "../images/git-svgrepo-com.svg";
import Figma from "../images/figma-svgrepo-com.svg";
import PHP from "../images/php-svgrepo-com.svg";
import Mysql from "../images/mysql-logo-svgrepo-com.svg";
import Achievement1 from "../images/achievement-1.jpg";
import Achievement2 from "../images/achievement-2.jpg";

const PrimaryTabs = () => {
  const { theme, toggleTheme } = useTheme();
  const [toggle, setToggle] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);

  function updateToggle(id) {
    setToggle(id);
  }

  const useProjectsData = [
    {
      id: 1,
      label: "Web App",
      title: "Spotify Clone - Music Streaming",
      imageUrl: Project1,
    },
    {
      id: 2,
      label: "Web App",
      title: "Resto City - Food Ordering",
      imageUrl: Project2,
    },
    {
      id: 3,
      label: "Web App",
      title: "GPA Wizard - Online Calculator",
      imageUrl: Project8,
    },
    {
      id: 4,
      label: "Web App",
      title: "Weatherio - Live Weather App",
      imageUrl: Project4,
    },
    {
      id: 5,
      label: "Web App",
      title: "Tvflix - Netflix Clone 2.0",
      imageUrl: Project5,
    },
    {
      id: 6,
      label: "Website",
      title: "Travelia - Travel Website",
      imageUrl: Project6,
    },
    {
      id: 7,
      label: "Web App",
      title: "SaaS - AI Platform",
      imageUrl: Project7,
    },
  ];

  const useTechData = [
    {
      id: 1,
      imageUrl: HtmlImg,
      label: "HTML",
    },
    {
      id: 2,
      imageUrl: CssImg,
      label: "CSS",
    },
    {
      id: 3,
      imageUrl: ReactImg,
      label: "React JS",
    },
    {
      id: 4,
      imageUrl: MongoImg,
      label: "Mongo DB",
    },
    {
      id: 5,
      imageUrl: GithubImg,
      label: "Github",
    },
    {
      id: 6,
      imageUrl: VsImg,
      label: "VS Code",
    },
    {
      id: 7,
      imageUrl: NextJs,
      label: "Next JS",
    },
    {
      id: 8,
      imageUrl: Typescript,
      label: "Typescript",
    },
    {
      id: 9,
      imageUrl: PHP,
      label: "PHP",
    },
    {
      id: 10,
      imageUrl: Mysql,
      label: "MySql",
    },
    {
      id: 11,
      imageUrl: Git,
      label: "Git",
    },
    {
      id: 12,
      imageUrl: Figma,
      label: "Figma",
    },
  ];

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = useProjectsData.slice(firstPostIndex, lastPostIndex);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_usudlhg",
        "template_e7tv2ln",
        form.current,
        "LgnNAN7FK2jw761hS"
      )
      .then(
        (result) => {
          alert("Message sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="w-full">
      <div
        className={`${
          theme === "light"
            ? "bg-backgroundLight border-outlineVariantLight"
            : "bg-backgroundDark border-outlineVariantDark"
        } my-[24px] mx-[16px] grid grid-cols-3 justify-center border-b`}
      >
        <div
          onClick={() => updateToggle(1)}
          className={`relative h-[48px] w-full grid place-content-center ${
            toggle === 1 && theme === "light"
              ? "bg-surfaceContainerLight text-onSurfaceVariantLight border-b-2 border-outlineLight"
              : theme === "dark" && toggle === 1
              ? "bg-surfaceContainerDark text-onSurfaceVariantDark border-b-2 border-outlineDark"
              : theme === "light" && toggle !== 1
              ? "hover:bg-surfaceContainerLight text-onSurfaceVariantLight"
              : theme === "dark" && toggle !== 1
              ? "hover:bg-surfaceContainerDark text-onSurfaceVariantDark"
              : ""
          }`}
        >
          <p>Projects</p>
        </div>
        <div
          onClick={() => updateToggle(2)}
          className={`relative h-[48px] w-full grid place-content-center ${
            toggle === 2 && theme === "light"
              ? "bg-surfaceContainerLight text-onSurfaceVariantLight border-b-2 border-outlineLight"
              : theme === "dark" && toggle === 2
              ? "bg-surfaceContainerDark text-onSurfaceVariantDark border-b-2 border-outlineDark"
              : theme === "light" && toggle !== 2
              ? "hover:bg-surfaceContainerLight text-onSurfaceVariantLight"
              : theme === "dark" && toggle !== 2
              ? "hover:bg-surfaceContainerDark text-onSurfaceVariantDark"
              : ""
          }`}
        >
          <p>Resume</p>
        </div>
        <div
          onClick={() => updateToggle(3)}
          className={`relative h-[48px] w-full grid place-content-center ${
            toggle === 3 && theme === "light"
              ? "bg-surfaceContainerLight text-onSurfaceVariantLight border-b-2 border-outlineLight"
              : theme === "dark" && toggle === 3
              ? "bg-surfaceContainerDark text-onSurfaceVariantDark border-b-2 border-outlineDark"
              : theme === "light" && toggle !== 3
              ? "hover:bg-surfaceContainerLight text-onSurfaceVariantLight"
              : theme === "dark" && toggle !== 3
              ? "hover:bg-surfaceContainerDark text-onSurfaceVariantDark"
              : ""
          }`}
        >
          <p>Contact</p>
        </div>
      </div>
      <div
        className={`${
          toggle === 1
            ? "p-sectionPadding project show-content"
            : "p-sectionPadding project hide-content"
        }`}
      >
        <ProjectList useProjectsData={currentPost} />
        <Pagination
          currentPage={currentPage}
          totalPosts={useProjectsData.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div
        className={`${
          toggle === 2
            ? "p-sectionPadding resume show-content"
            : "p-sectionPadding resume hide-content"
        }`}
      >
        <div className="overflow-hidden bg-transparent grid items-center gap-[20px]">
          <h2
            className={`${
              theme === "light" ? "text-onSurfaceLight" : "text-onSurfaceDark"
            } font-bold text-lg`}
          >
            Experience
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mb-[20px]">
            <li>
              <div className="grid gap-[4px]">
                <p
                  className={`font-bold text-md ${
                    theme === "light"
                      ? "text-onSurfaceLight"
                      : "text-onSurfaceDark"
                  }`}
                >
                  Freelance Web Developer
                </p>
                <span
                  className={`font-semibold text-sm ${
                    theme === "light" ? "text-primaryLight" : "text-primaryDark"
                  }`}
                >
                  2022 - Present
                </span>
                <p
                  className={`${
                    theme === "light"
                      ? "text-onSurfaceLight"
                      : "text-onSurfaceDark"
                  } leading-5 text-[15px]`}
                >
                  Assisting college students in their capstone project such as
                  troubleshooting technical issues and integrating other
                  features. Develop and implement the client’s vision by
                  creating user-friendly interfaces with responsive
                  capabilities.
                </p>
              </div>
            </li>
          </ul>
          <h2
            className={`${
              theme === "light" ? "text-onSurfaceLight" : "text-onSurfaceDark"
            } font-bold text-lg`}
          >
            Education & Achievements
          </h2>
          <ul className="flex flex-col gap-[24px] mb-[20px]">
            <li>
              <div className="grid gap-[4px]">
                <p
                  className={`font-bold text-md ${
                    theme === "light"
                      ? "text-onSurfaceLight"
                      : "text-onSurfaceDark"
                  }`}
                >
                  Bachelor of Science in Information System
                </p>
                <span
                  className={`font-semibold text-sm ${
                    theme === "light" ? "text-primaryLight" : "text-primaryDark"
                  }`}
                >
                  2021 - Present
                </span>
                <p
                  className={`${
                    theme === "light"
                      ? "text-onSurfaceLight"
                      : "text-onSurfaceDark"
                  } leading-5 text-[15px]`}
                >
                  An information system is a structured and organized collection
                  of people, hardware, software, data, and network resources
                  that work together to capture, store, process, manage, and
                  disseminate information within an organization or a specific
                  context.
                </p>
              </div>
            </li>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              <img src={Achievement1} alt="" />
              <img src={Achievement2} alt="" />
            </div>
          </ul>
          <h2
            className={`${
              theme === "light" ? "text-onSurfaceLight" : "text-onSurfaceDark"
            } font-bold text-lg`}
          >
            Skills & Technologies
          </h2>
          <ul className="grid md:grid-cols-4 grid-cols-2 gap-[12px]">
            {useTechData.map((techItem) => (
              <li
                key={techItem.id}
                className={`flex items-center gap-[8px] p-[12px] rounded-shapeCornerSmall ${
                  theme === "light"
                    ? "bg-surfaceContainerLowLight text-onSurfaceLight"
                    : "bg-surfaceContainerLowDark text-onSurfaceDark"
                }`}
              >
                <img className="h-[28px]" src={techItem.imageUrl} alt="" />
                <span className="font-semibold text-sm">{techItem.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`${
          toggle === 3
            ? "p-sectionPadding contact show-content"
            : "p-sectionPadding contact hide-content"
        }`}
      >
        <div className="overflow-hidden grid md:grid-cols-2 grid-cols-1 gap-4 bg-transparent">
          <div className="w-full flex flex-col gap-3">
            <h4
              className={`${
                theme === "light" ? "text-onSurfaceLight" : "text-onSurfaceDark"
              } font-bold text-lg`}
            >
              Contact Information
            </h4>
            <ul className="flex flex-col gap-2">
              <li
                className={`flex items-center gap-[12px] ${
                  theme === "light"
                    ? "text-onSurfaceLight"
                    : "text-onSurfaceDark"
                }`}
              >
                <div className="w-[20px] h-[20px] flex-shrink-0 grid place-items-center">
                  <MdOutlineEmail className="text-2xl" />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-[14px] text-primaryLight">
                    Email Me
                  </p>
                  <span className="text-sm">kyleandrelim17@gmail.com</span>
                  <span className="text-sm">kylemastercoder14@gmail.com</span>
                </div>
              </li>
              <li
                className={`flex items-center gap-[12px] ${
                  theme === "light"
                    ? "text-onSurfaceLight"
                    : "text-onSurfaceDark"
                }`}
              >
                <div className="w-[20px] h-[20px] flex-shrink-0 grid place-items-center">
                  <MdOutlinePhone className="text-2xl" />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-[14px] text-primaryLight">
                    Contact Me
                  </p>
                  <span className="text-sm">09152479693</span>
                  <span className="text-sm">09755906889</span>
                </div>
              </li>
              <li
                className={`flex items-center gap-[12px] ${
                  theme === "light"
                    ? "text-onSurfaceLight"
                    : "text-onSurfaceDark"
                }`}
              >
                <div className="w-[20px] h-[20px] flex-shrink-0 grid place-items-center">
                  <MdHome className="text-2xl" />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-[14px] text-primaryLight">
                    Address
                  </p>
                  <span className="text-sm">
                    Block 111 Lot 4 Ruby Street Barangay Santa Lucia, Dasmarinas
                    City, Cavite - 4114
                  </span>
                </div>
              </li>
            </ul>
            <hr
              className={`${
                theme === "light"
                  ? "bg-onBackgroundLight"
                  : "bg-onBackgroundDark"
              }`}
            />
            <h4
              className={`${
                theme === "light" ? "text-onSurfaceLight" : "text-onSurfaceDark"
              } font-bold text-lg`}
            >
              Social Informartion
            </h4>
            <div
              className={`flex gap-5 ${
                theme === "light" ? "text-onSurfaceLight" : "text-onSurfaceDark"
              }`}
            >
              <a
                target="_blank"
                href="https://www.facebook.com/kyleandre.lim29"
              >
                <AiFillFacebook className="text-2xl" />
              </a>
              <a href="https://github.com/kylemastercoder14" target="_blank">
                <AiFillGithub className="text-2xl" />
              </a>
              <a href="https://www.instagram.com/kylndrdvdlm" target="_blank">
                <AiFillInstagram className="text-2xl" />
              </a>
            </div>
          </div>
          <div
            className={`w-full flex flex-col gap-5 shadow-lg p-4 rounded-shapeCornerMedium ${
              theme === "light"
                ? "bg-surfaceContainerLowLight"
                : "bg-surfaceContainerLowDark"
            }`}
          >
            <h3
              className={`${
                theme === "light" ? "text-onSurfaceLight" : "text-onSurfaceDark"
              } font-bold text-lg`}
            >
              Let's Work Together.
            </h3>
            <form
              onSubmit={sendEmail}
              ref={form}
              className="w-full flex flex-col gap-3"
            >
              <input
                className={`bg-transparent py-[8px] px-[10px] shadow-shadowInset border-none outline-none rounded-shapeCornerExtraSmall ${
                  theme === "light"
                    ? "text-onSurfaceVariantLight shadow-outlineLight"
                    : "text-onSurfaceVariantDark shadow-outlineDark"
                }`}
                type="text"
                placeholder="Name*"
                required
                name="user_name"
              />
              <input
                className={`bg-transparent py-[8px] px-[10px] shadow-shadowInset border-none outline-none rounded-shapeCornerExtraSmall ${
                  theme === "light"
                    ? "text-onSurfaceVariantLight shadow-outlineLight"
                    : "text-onSurfaceVariantDark shadow-outlineDark"
                }`}
                type="email"
                placeholder="Email*"
                required
                name="user_email"
              />
              <input
                className={`bg-transparent py-[8px] px-[10px] shadow-shadowInset border-none outline-none rounded-shapeCornerExtraSmall ${
                  theme === "light"
                    ? "text-onSurfaceVariantLight shadow-outlineLight"
                    : "text-onSurfaceVariantDark shadow-outlineDark"
                }`}
                type="text"
                placeholder="Subject*"
                required
                name="subject"
              />
              <textarea
                className={`bg-transparent py-[8px] px-[10px] shadow-shadowInset border-none outline-none rounded-shapeCornerExtraSmall ${
                  theme === "light"
                    ? "text-onSurfaceVariantLight shadow-outlineLight"
                    : "text-onSurfaceVariantDark shadow-outlineDark"
                } resize-none`}
                placeholder="Message*"
                required
                name="message"
              ></textarea>
              <button
                type="submit"
                className={`h-[40px] grid place-items-center px-[24px] rounded-full font-weightMedium overflow-hidden ${
                  theme === "light"
                    ? "bg-primaryLight text-onPrimaryLight"
                    : "bg-primaryDark text-onPrimaryDark"
                }`}
              >
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryTabs;
