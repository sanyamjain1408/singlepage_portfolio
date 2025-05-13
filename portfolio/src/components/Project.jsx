import React, { useState } from "react";
import first from "/src/assets/portfolio.png";
import second from "/src/assets/clipcode.png";
import third from "/src/assets/todo.png";
import forth from "/src/assets/submitform.png";
import five from "/src/assets/docpat.png";
import six from "/src/assets/routing.png";
import seven from "/src/assets/color_switcher.png";
import eight from "/src/assets/google.png";
import nine from "/src/assets/password_generator.png";
import ten from "/src/assets/number_guessing_game.png";
import eliven from "/src/assets/bmi_calculator.png";
import twelve from "/src/assets/change_bgcolor_every_sec.png";

const projects = [
  {
    src: first,
    title: "Portfolio",
    link: "https://singlepage-portfolio-2ayy.vercel.app/",
  },
  {
    src: second,
    title: "ClipCode",
    link: "https://clipcodeapp-two.vercel.app/",
  },
  {
    src: third,
    title: "Todo",
    link: "https://todo-lilac-sigma.vercel.app/",
  },
  {
    src: forth,
    title: "SubmitForm-Backend_nodejs",
    link: "https://github.com/sanyamjain1408/submit_form_store_in_mongodb----backend_node.js",
  },
  {
    src: five,
    title: "DOCPAT",
    link: "https://github.com/sanyamjain1408/docpat",
  },
  {
    src: six,
    title: "Page Routing",
    link: "https://github.com/sanyamjain1408/page_routing",
  },
  {
    src: seven,
    title: "Color Switcher",
    link: "https://github.com/sanyamjain1408/switch_color",
  },
  {
    src: eight,
    title: "Google",
    link: "https://github.com/sanyamjain1408/google-web-page",
  },
  {
    src: nine,
    title: "Generate Random Password",
    link: "https://github.com/sanyamjain1408/passwordgenerator/",
  },
   {
    src: ten,
    title: "Number Guessing Game",
    link: "https://github.com/sanyamjain1408/number-guessing-game/",
  },
  {
    src: eliven,
    title: "BMI Calculator",
    link: "https://github.com/sanyamjain1408/bmi_calculator/",
  },
   {
    src: twelve,
    title: "Change Bg Color Every Sec.",
    link: "https://github.com/sanyamjain1408/bmi_calculator/",
  }
];

function Project() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section
      id="project"
      className="flex flex-col pb-10 justify-center items-center"
    >
      <div className="sm:grid grid-cols-2 gap-10">
        {visibleProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-[40rem] border-black mt-5 rounded-3xl p-3 shadow-2xl hover:p-0 hover:shadow-black ease-in-out duration-200"
                src={project.src}
                alt={project.title}
              />
              <h1 className="text-2xl text-black font-bold hover:text-3xl ease-in-out duration-200">
                {project.title}
              </h1>
            </div>
          </a>
        ))}
      </div>

      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-8 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
      >
        {showAll ? "Show Less" : "Show All Projects"}
      </button>
    </section>
  );
}

export default Project;
