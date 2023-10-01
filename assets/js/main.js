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
  `As an Executive in the Accounting Committee, I've played a key role in executive-level planning, event management, and promoting executive skills development. I'm committed to our club's growth and success in fostering leadership education and networking opportunities for our members.`,
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


hoverChangeDescription(
  ".iau",
  "Studying Bachelor of Business Administration at Imam Abdulrahman bin Faisal University."
);
hoverChangeDescription(
  ".meta",
  "Certified by META, in Front-End, and Social Media Marketing."
);
hoverChangeDescription(
  ".google",
  "Certified by Google, in Project Management, UX Design, and Digital Marketing."
);
hoverChangeDescription(
  ".grad",
  "Graduated from Qatif Secondary School with 100% GPA."
);
hoverChangeDescription(
  ".sdaia",
  "Certified by SDAIA, in Artificial intelligence (Python)."
);
hoverChangeDescription(
  ".pmp",
  "Certified by PMI, in Project Management."
);


window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Disable keyboard shortcuts
window.addEventListener('keydown', function (e) {
  e.preventDefault();
});