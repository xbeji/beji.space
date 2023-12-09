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

hoverChangeExperience(
  ".fireg",
  `As a Project Manager at FireGuard, I used my skills in strategic planning, project management, and leadership to foster our team's growth and create networking opportunities for our members.`,
  "Project Manager",
  "FireGuard",
  "Sep 2023 - Oct 2023"
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
  ".uos",
  "Certified by The University of Macquarie, in Creating Innovation."
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
window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Disable keyboard shortcuts
window.addEventListener('keydown', function (e) {
  e.preventDefault();
});

// Add this to your existing main.js file or create a new one

document.addEventListener("DOMContentLoaded", function () {
  // Set the date for graduation (June 2026)
  const graduationDate = new Date("June 1, 2026 00:00:00").getTime();

  // Update the countdown every second
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


window.onload = function() {
  var articles = document.getElementsByClassName('intervalCardReveal');
  for (var i = 0; i < articles.length; i++) {
      articles[i].addEventListener('mouseover', function() {
          var image = this.getElementsByClassName('ei')[0]; 
          image.dataset.originalSrc = image.src; 
          var pathArray = image.src.split('/');
          var lastSegment = pathArray.pop();
          image.src = pathArray.join('/') + '/rl' + lastSegment; 
      });
      articles[i].addEventListener('mouseout', function() {
          var image = this.getElementsByClassName('ei')[0]; 
          image.src = image.dataset.originalSrc; 
      });
  }
};



