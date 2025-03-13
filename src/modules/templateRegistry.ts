import TemplateManagerAPI from "./templateManagerAPI";

import V2Hero from "../components/V2Hero";
import V2Nav from "../components/V2Nav";

TemplateManagerAPI.registerTemplate({
  id: "enoch",
  name: "enoch",
  components: [
    {
      component: V2Nav,
      data: {
        logo: "/FLWeb/logo.png", // Image URL for logo
        links: [
          { name: "Home", url: "#" },
          { name: "About Me", url: "#" },
          { name: "Services", url: "#" },
          { name: "Projects", url: "#" },
          { name: "Blog", url: "#" },
          { name: "Contact", url: "#" },
        ],
      },
      settings: {},
    },
    {
      component: V2Hero,
      data: {
        heading: "Welcome to the V25 Hero Section",
        title: "Hey Hi👋",
        name: "FLWeb Developer",
        profession: "Static Web Engine",
        professionDescription:
          "This project is a static templating engine designed for simplicity and accessibility. It allows users, especially students, to easily edit content and host their online portfolios on platforms like GitHub Pages without requiring backend servers. Built with React, Vite, and Tailwind CSS, it combines a sleek user interface with powerful template management capabilities.",
        selfBg: "/self.png",
        heroBg: "/heroBg.png", // BG Image URL
        heroButtonText: "Download CV",
        cvUrl: "/V2/cv.pdf", // url for the pdf
        subtitle: "Hero Subtitle",
        bgUrl: "/FLWeb/bubbles.mp4", // Image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        textColor: "white",
      },
      settings: {},
    },

  ],
});

console.log("Templates with previews registered successfully!");
