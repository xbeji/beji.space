import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".QurbCare",
  `In my role as a CFO, I have successfully overseen financial operations at QurbCare. My responsibilities included financial strategy development, budgeting, financial analysis, and risk management. I have a proven track record of effectively managing finances to drive profitability and sustainable growth.`,
  "Chief Financial Officer",
  "QurbCare",
  "Sep 2023 - Present"
);

hoverChangeExperience(
  ".Google",
  `As the Public Relations Responsible of our GDSC club, I've been dedicated to boosting our club's image and fostering key relationships. My focus on PR strategies has helped enhance our visibility, reputation, and collaboration within the tech community at our university.`,
  "Public Relations Responsible",
  "GDSC, Imam Abdulrahman bin Faisal University",
  "Sep 2023 - Present"
);

hoverChangeExperience(
  ".CBA",
  `As an Executive Team Member in the Accounting Club, I've played a key role in financial planning, event management, and promoting financial literacy. I'm committed to our club's growth and success in fostering financial education and networking opportunities for our members`,
  "Administrator",
  "Accounting Committee, Imam Abdulrahman bin Faisal University",
  "Sep 2023 - Present"
);

hoverChangeExperience(
  ".Innovationunit",
  `As a Supervisor in our university's Innovation Unit, I've nurtured innovation, supported creative projects, and empowered our community to make a lasting impact.`,
  "Supervisor",
  "Innovation Unit, Imam Abdulrahman bin Faisal University",
  "Sep 2023 - Present"
);

hoverChangeExperience(
  ".Mostaqbli",
  `As a Website Manager for Mostaqbli, I've fostered innovation, provided support for creative initiatives, and empowered our community to create a lasting influence.`,
  "Website Manager",
  "Mostaqbli",
  "Jan 2022 - Present"
);

hoverChangeDescription(
  ".html",
  "HTML is a markup language, where we mark elements to define what information the page will display."
);
hoverChangeDescription(
  ".css",
  "CSS is a stylesheet language made up of “layers”, created for the purpose of styling pages."
);
hoverChangeDescription(
  ".js",
  "JavaScript is a programming language that allows you to implement dynamic elements on web pages."
);
hoverChangeDescription(
  ".sass",
  "Sass is a CSS preprocessor that adds some features that are not available natively."
);
hoverChangeDescription(
  ".react",
  "React is a JavaScript library focused on creating user interfaces in a componetized way."
);
hoverChangeDescription(
  ".next",
  "Next.js is a web framework that enables functionality such as server-side rendering and generating React-based static web sites."
);
hoverChangeDescription(
  ".styled",
  "styled-components is a library that uses the concept of CSS-in-JS, that is, it allows us to write CSS code inside Javascript."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS is a CSS framework that provides us with utility classes for the purpose of styling pages."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript is a superset of JavaScript that includes features that are not present in the language natively, in addition to making it static."
);
hoverChangeDescription(
  ".radix",
  "Radix is ​​a library that provides accessible, styleless components for creating React applications."
);
hoverChangeDescription(
  ".cypress",
  "Cypress is a framework for end-to-end test automation, which currently uses the JavaScript language."
);
hoverChangeDescription(
  ".storybook",
  "Storybook is a tool that aims to document and test application components."
);

window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Disable keyboard shortcuts
window.addEventListener('keydown', function (e) {
  e.preventDefault();
});