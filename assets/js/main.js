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
  `<ul>
  <li>Assisted in the development and execution of financial strategies.</li>
  <li>Conducted financial analysis and risk assessments to inform strategic planning.</li>
  <li>Supported budgeting and forecasting processes to ensure financial stability.</li>
  <li>Advised on cost-saving initiatives.</li>
  <li>Collaborated with management to align financial goals with overall business objectives.</li>
  <li>Ensured compliance with financial regulations and standards.</li>
</ul>
`,
  "Financial Advisor",
  "QurbCare",
  "Sep 2023 - Present"
);

hoverChangeExperience(
  ".Google",
  `<ul>
  <li>&ndash; Enhanced the club's visibility and reputation within the university and tech community.</li>
  <li>&ndash; Developed and implemented effective PR strategies to foster key relationships.</li>
  <li>&ndash; Organized events and initiatives to promote the club's activities and engage members.</li>
  <li>&ndash; Managed communication channels to ensure consistent and impactful messaging.</li>
  <li>&ndash; Collaborated with other university clubs and external partners for joint events and projects.</li>
  <li>&ndash; Supported the leadership team in strategic planning and community outreach.</li>
</ul>`,
  "Public Relations Responsible",
  "GDSC, Imam Abdulrahman bin Faisal University",
  "Sep 2023 - Present"
);

hoverChangeExperience(
  ".ghelaf",
  `<ul>
      <li> &ndash; Coordinated with different departments to ensure smooth workflow.</li>
      <li> &ndash; Managed logistics and improved daily operational efficiency.</li>
      <li> &ndash; Contributed to strategic planning and problem-solving.</li>
      <li> &ndash; Developed strong organizational, analytical, and communication skills.</li></ul>`,
  "Operations Intern",
  "Ghelaf Almehan",
  "2024 - Present"
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
  "Certified by Google, in Project Management, UX Design, System Administration and IT Infrastructure Services, and Digital Marketing."
);
hoverChangeDescription(
  ".sdaia",
  "Certified by SDAIA, in Artificial intelligence (Python)."
);
hoverChangeDescription(
  ".pmp",
  "Certified by PMI, in Project Management."
);
hoverChangeDescription(
  ".fia",
  "Certified by Fundação Instituto de Administração (Administration Institute Foundation), in Innovation Management."
);
hoverChangeDescription(
  ".uom",
  "Certified by The University of Maryland, in Developing Innovative Ideas for Product Leaders, and Cybersecurity for Everyone."
);
hoverChangeDescription(
  ".kld",
  "Certified by AlFaisal University, in Innovation Models."
);
hoverChangeDescription(
  ".dmi",
  "Certified by The Digital Marketing Institute, in Digital Strategy and Business Opportunity, Digital Channel Planning and E- Commerce Strategy, and Digital Leadership and Digital Strategy Execution."
);
hoverChangeDescription(
  ".uomi",
  "Certified by The University of Michigan, in Data Collection and Processing with Python, Python Functions, Files, and Dictionaries, Python Basics, and Python Classes and Inheritance."
);
hoverChangeDescription(
  ".dl",
  "Certified by DeepLearning.AI, in AI and Public Health, and AI and Disaster Management."
);
hoverChangeDescription(
  ".uov",
  "Certified by The University of Virginia, in Ethical Leadership Through Giving Voice to Values."
);
hoverChangeDescription(
  ".uoas",
  "Certified by The University of Sydney, in Innovation Through Design: Think, Make, Break, Repeat."
);
hoverChangeDescription(
  ".uocb",
  "Certified by The University of Colorado Boulder, in Teamwork Skills: Communicating Effectively in Groups."
);



document.addEventListener("DOMContentLoaded", function () {
  // Set the date for graduation (For example: June 2026)
  const graduationDate = new Date("June 1, 2026 00:00:00").getTime();

  // The code below updates the countdown every seocnd
  const countdownElement = document.getElementById("countdown");

  function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeRemaining = graduationDate - currentDate;

    if (timeRemaining > 0) {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      countdownElement.innerHTML = `
        My <span class="hg">Grad</span>uation: ${days}d ${hours}h ${minutes}m ${seconds}s
      `;
    } else {
      countdownElement.innerHTML = "Graduation has arrived!";
    }
  }

  setInterval(updateCountdown, 1000);
  updateCountdown(); // Initial call to set the initial value
});







document.querySelector("body").addEventListener("mousemove", eyeball);
      function eyeball() {
        var eye = document.querySelectorAll(".eye");
        eye.forEach(function(eye) {
          // x & y are variables and x represents the x coordinate of the mouse and y represents the coordinate of the mouse.
          let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
          let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
          let radian = Math.atan2(event.pageX - x, event.pageY - y);
          //   rot is a variable (short for rotate)
          let rot = radian * (180 / Math.PI) * -1 + 270;
          eye.style.transform = "rotate(" + rot + "deg)";
        });
      }