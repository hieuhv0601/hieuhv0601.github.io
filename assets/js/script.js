"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}
// #BUG

// const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// const namePattern = /^[a-z\S]+$/i;

// const form = document.querySelector("[data-form]");
// const formInputs = document.querySelectorAll(".form-input");
// const formBtn = document.querySelector("[data-form-btn]");

// const fullname = document.getElementById("fullname");
// const email = document.getElementById("email");
// const message = document.getElementById("message");

// function validateFullName(name) {
//   if (namePattern.test(name)) {
//     fullname.classList.remove("wrong");
//     return true;
//   } else {
//     fullname.classList.add("wrong");
//     return false;
//   }
// }

// function validateEmail(email) {
//   if (emailPattern.test(email)) {
//     email.classList.remove("wrong");
//     return true;
//   } else {
//     email.classList.add("wrong");
//     return false;
//   }
// }

// function validateMessage(mess) {
//   if (mess.checkValidity()) {
//     message.classList.remove("wrong");
//     return true;
//   } else {
//     message.classList.add("wrong");
//     return false;
//   }
// }

// function updateFormButtonState() {
//   let allInputsValid = true;
//   let inputEmail = validateEmail(email.value);
//   let inputName = validateFullName(fullname.value);
//   let inputMessage = validateMessage(message);

//   if (inputEmail && inputName && inputMessage) {
//     allInputsValid = true;
//   } else {
//     allInputsValid = false;
//   }

//   if (allInputsValid) {
//     formBtn.removeAttribute("disabled");
//   } else {
//     formBtn.setAttribute("disabled", "");
//   }
// }

// fullname.addEventListener("input", updateFormButtonState);
// email.addEventListener("input", updateFormButtonState);
// message.addEventListener("input", updateFormButtonState);

// formBtn.addEventListener("click", function (event) {
//   event.preventDefault();

//   if (
//     validateFullName(fullname.value) &&
//     validateEmail(email.value) &&
//     validateMessage(message)
//   ) {
//     handleFormSubmission();
//   } else {
//     // Handle invalid form submission
//   }
// });

// function handleFormSubmission() {
//   // Implement your form submission logic here
// }

// updateFormButtonState(); // Call initially to set the initial state of the form button
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const namePattern = /^[A-Z][a-zA-Z]*( [A-Z][a-zA-Z]*)*$/;

const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll(".form-input");
const formBtn = document.querySelector("[data-form-btn]");

function validateFullName(name) {
  return namePattern.test(name);
}

function validateEmail(email) {
  return emailPattern.test(email);
}

function updateFormButtonState() {
  let allInputsValid = true;

  formInputs.forEach((input) => {
    const isInputValid = input.checkValidity();

    if (!isInputValid) {
      input.classList.add("wrong");
      allInputsValid = false;
    } else {
      input.classList.remove("wrong");
    }
  });

  if (allInputsValid) {
    formBtn.removeAttribute("disabled");
  } else {
    formBtn.setAttribute("disabled", "");
  }
}

formInputs.forEach((input) => {
  input.addEventListener("input", function () {
    updateFormButtonState();
  });
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // Your form submission logic here
});
//#DONE
// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// Zoom-in feactures
const zoomableImages = document.querySelectorAll(".zoomable-image");

zoomableImages.forEach((image) => {
  image.addEventListener("click", () => {
    const enlargedImageContainer = document.createElement("div");
    enlargedImageContainer.className = "enlarged-image";

    const enlargedImage = document.createElement("img");
    enlargedImage.src = image.src;

    enlargedImageContainer.appendChild(enlargedImage);
    document.body.appendChild(enlargedImageContainer);

    enlargedImageContainer.addEventListener("click", () => {
      document.body.removeChild(enlargedImageContainer);
    });
  });
});
// #DONE

/*JavaScript for Light/Dark Theme Toggle*/

//FUNCTION
function toggleItemActive(item) {
  item.classList.toggle("active");
}

function changeTextColorLightTheme(text) {
  text.classList.toggle("text-light-theme");
}

function changeTitleColorLightTheme(title) {
  title.classList.toggle("title-light-theme");
}
function changeCategoryColorLightTheme(category) {
  category.classList.toggle("category-title-light-theme");
}

// Get the references to the SVG elements
const svgGithub = document.getElementById("github");
const svgVirtualbox = document.getElementById("virtualbox");
const svgBash = document.getElementById("bash");

// Define the new source paths for the SVG images
let newSrcGithub = "./assets/images/svg/githubDark.svg";
let newSrcVirtualbox = "./assets/images/svg/virtualboxDark.svg";
let newSrcBash = "./assets/images/svg/bashDark.svg";

const body = document.body;
const themeToggle = document.getElementById("theme-toggle");

const aboutArticle = document.querySelector("article[data-page='about']");
const resumeArticle = document.querySelector("article[data-page='resume']");
const portfolioArticle = document.querySelector(
  "article[data-page='portfolio']"
);
const blogArticle = document.querySelector("article[data-page='blog']");
const contactArticle = document.querySelector("article[data-page='contact']");

const navbar = document.querySelector(".navbar");

const iconBoxItem = document.querySelector(".icon-box");
const allIconBoxItem = document.querySelectorAll(".icon-box");
const styleIconBoxItem = iconBoxItem.appendChild(
  document.createElement("style")
);

const serviceItem = document.querySelector(".service-item");
const allServiceItem = document.querySelectorAll(".service-item");
const styleServiceItem = serviceItem.appendChild(
  document.createElement("style")
);

const infoMoreBtn = document.querySelector(".info_more-btn");
const styleInfoMoreBtn = infoMoreBtn.appendChild(
  document.createElement("style")
);
const submitFromBtn = document.querySelector(".form-btn");
const styleFormBtn = submitFromBtn.appendChild(document.createElement("style"));

const contentCardItem = document.querySelector(".content-card");
const styleContentCardItem = serviceItem.appendChild(
  document.createElement("style")
);
const projectCategoryText = document.querySelectorAll(".project-category");

const infoContentBox = document.querySelector(".info-content>.title");

const navbarTitle = document.querySelectorAll(".navbar-link");
const serviceTextElement = document.querySelectorAll(
  ".skill p,.service-item-text,.about-text,.title-wrapper>h3,.timeline-item>h4,.timeline-text,.info-content>h1,.contact-info>a,.contact-info>p,.contact-info>address,.language,.input-wrapper>input,.form-input"
); // Selects the first <a> element in the document
const skillTitle = document.querySelectorAll(
  ".title-wrapper>h5,.service-item-title,.service-title,.article-title,.form-title,.skills-title,.contact-title,.filter-item>button,.project-title"
);

//logo
const facebookLogo = document.querySelector(".facebook-logo .social-link");
const linkedinLogo = document.querySelector(".linkedin-logo .social-link");
const githubLogo = document.querySelector(".github-logo .social-link");
const youtubeLogo = document.querySelector(".youtube-logo .social-link");
//Source #VIDEO
const sourceLink = document.querySelector("#video-source");
const oldVideoSource = "/assets/images/intro__Merged.mp4";
const newVideoSource =
  "/assets/images/Sands of Arrakis - An EPIC Ambient Music Journey - Inspired By The Movie DUNE [Vocals By Syberlilly].mp4";

const videoElement = document.querySelector(".fullscreen-bg__video");
// Modify the color of the ::before pseudo-element

themeToggle.addEventListener("click", function () {
  // Toggle the 'light-theme' class on the body
  //background light theme toggle
  body.classList.toggle("light-theme");
  //aritcle content
  sidebar.classList.toggle("light-theme");
  aboutArticle.classList.toggle("light-theme");
  resumeArticle.classList.toggle("light-theme");
  portfolioArticle.classList.toggle("light-theme");
  blogArticle.classList.toggle("light-theme");
  contactArticle.classList.toggle("light-theme");

  //gradient light theme toggle
  navbar.classList.toggle("navbar-light-theme");
  infoContentBox.classList.toggle("navbar-light-theme");
  // serviceItem.classList.toggle("active");
  //text light theme toggle
  facebookLogo.classList.toggle("text-light-theme");
  linkedinLogo.classList.toggle("text-light-theme");
  githubLogo.classList.toggle("text-light-theme");
  youtubeLogo.classList.toggle("text-light-theme");
  serviceTextElement.forEach((textItem) => {
    changeTextColorLightTheme(textItem);
  });

  allServiceItem.forEach((serviceItem) => {
    toggleItemActive(serviceItem);
  });

  allIconBoxItem.forEach((serviceItem) => {
    toggleItemActive(serviceItem);
  });

  skillTitle.forEach((title) => {
    changeTitleColorLightTheme(title);
  });

  projectCategoryText.forEach((category) => {
    changeCategoryColorLightTheme(category);
  });
  toggleItemActive(contentCardItem);
  toggleItemActive(document.querySelector(".title"));
  toggleItemActive(document.querySelector(".facebook-logo"));
  toggleItemActive(document.querySelector(".linkedin-logo"));
  toggleItemActive(document.querySelector(".github-logo"));
  toggleItemActive(document.querySelector(".youtube-logo"));
  toggleItemActive(document.querySelector(".mapbox"));

  //way
  videoElement.style.opacity = 0;

  // Update the video source based on the theme
  const updatedVideoSource = document.body.classList.contains("light-theme")
    ? newVideoSource
    : oldVideoSource;

  // After a short delay for the fade-out effect
  setTimeout(() => {
    // Update the video source
    videoElement.src = updatedVideoSource;

    // Reset the video's playback position
    videoElement.currentTime = 0;

    // Show the video with fade-in transition
    videoElement.style.opacity = 1;
  }, 500); // Adjust the delay to match the transition duration
  // item  light-theme toggle

  if (body.classList.contains("light-theme")) {
    styleServiceItem.innerHTML =
      ".service-item::before{background: var(--cream);}";
    styleIconBoxItem.innerHTML = ".icon-box::before{background: var(--cream);}";
    styleContentCardItem.innerHTML =
      ".content-card::before{background: beige;}";
    styleInfoMoreBtn.innerHTML =
      ".info_more-btn::before{background: rgba(13, 13, 189, 0.767);}";
    styleFormBtn.innerHTML = ".form-btn::before{background: black;}";
  } else {
    // Update the src attribute of each SVG element
    styleServiceItem.innerHTML =
      ".service-item::before{background: var(--bg-gradient-jet);}";
    styleIconBoxItem.innerHTML =
      ".icon-box::before{background: var(--bg-gradient-jet);}";
    styleContentCardItem.innerHTML =
      ".content-card::before{background: var(--bg-gradient-jet);}";
    styleInfoMoreBtn.innerHTML =
      ".info_more-btn::before{background:var(--bg-gradient-jet);}";
    styleFormBtn.innerHTML =
      ".form-btn::before{background: var(--bg-gradient-jet);}";
  }

  if (body.classList.contains("light-theme")) {
    // Update the src attribute of each SVG element
    svgGithub.setAttribute("src", newSrcGithub);
    svgVirtualbox.setAttribute("src", newSrcVirtualbox);
    svgBash.setAttribute("src", newSrcBash);
    // sourceLink.setAttribute("src", newVideoSource);
  } else {
    // Update the src attribute of each SVG element
    newSrcGithub = "./assets/images/svg/githubDark.svg";
    newSrcVirtualbox = "./assets/images/svg/virtualboxDark.svg";
    newSrcBash = "./assets/images/svg/bashDark.svg";
    svgGithub.setAttribute("src", newSrcGithub);
    svgVirtualbox.setAttribute("src", newSrcVirtualbox);
    svgBash.setAttribute("src", newSrcBash);
    // sourceLink.setAttribute("src", oldVideoSource);
  }
});

//--------------------
//animated dark/light mode
const button = document.getElementById("theme-toggle");
const icon = document.getElementById("icon");

let isDarkMode = false;
let moonIcon = document.querySelector('ion-icon[name="moon-outline"]');
moonIcon.classList.add("moon");
button.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    icon.classList.add("flipped");
    icon.setAttribute("name", "sunny-outline");
    let sunIcon = document.querySelector('ion-icon[name="sunny-outline"]');
    sunIcon.classList.add("sun"); // Add the "sun" class to change color
    sunIcon.classList.remove("moon");
  } else {
    let sunIcon = document.querySelector('ion-icon[name="sunny-outline"]');
    let moonIcon = document.querySelector('ion-icon[name="sunny-outline"]');
    sunIcon.classList.remove("sun"); // Remove the "sun" class to reset color
    moonIcon.classList.add("moon");
    // icon.classList.remove("flipped");
    icon.setAttribute("name", "moon-outline");
  }
});

// //Background video
videoElement.addEventListener("loadeddata", function () {
  videoElement.play();
});
//Phone toggle
const phoneContact = document.getElementById("phone-contact");

phoneContact.addEventListener("click", function () {
  const phoneNumber = "+84(0)346-119-246";
  window.location.href = `tel:${phoneNumber}`;
});
//email toggle
const emailContact = document.getElementById("email-contact");

emailContact.addEventListener("click", function () {
  const emailAddress = "viethieulcvn@gmail.com";
  window.location.href = `mailto:${emailAddress}`;
});
//location toggle
const locationContact = document.getElementById("location-contact");

locationContact.addEventListener("click", function () {
  const contactSection = document.querySelector('[data-page="contact"]');
  if (contactSection) {
    for (let i = 0; i < pages.length; i++) {
      pages[i].classList.remove("active");
      navigationLinks[i].classList.remove("active");
    }
    contactSection.classList.add("active");
    this.classList.add("active");
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
});
//animated phone ring
function animatePhoneRing() {
  const phoneIcon = document.getElementById("icon-phone");
  phoneIcon.classList.add("ring-animation");

  // Remove the animation class after the animation completes
  setTimeout(() => {
    phoneIcon.classList.remove("ring-animation");
  }, 500); // Adjust the time to match the animation duration
}

//email animated
function animateEmail() {
  const emailIcon = document.getElementById("icon-email");
  emailIcon.classList.add("bounce-animation");

  // Remove the animation class after the animation completes
  setTimeout(() => {
    emailIcon.classList.remove("bounce-animation");
  }, 500); // Adjust the time to match the animation duration
}
//location animated
function animateLocation() {
  const locationIcon = document.getElementById("icon-location");
  locationIcon.classList.add("pulse-animation");

  // Remove the animation class after the animation completes
  setTimeout(() => {
    locationIcon.classList.remove("pulse-animation");
  }, 500); // Adjust the time to match the animation duration
}

//Globe-transfer between languages
const languages = {
  en: {
    about: [
      "👋 Hi there! I'm Hieu, a passionate DevOps enthusiast with a fervor for all things related to Cloud Computing, Security, and Computer Science.",
      "🚀 With a solid foundation in DevOps practices, I'm all about building bridges between development and operations, ensuring smoother workflows and accelerated deployments. As a tech aficionado, I embrace the power of Cloud Computing, leveraging its dynamic capabilities to bring innovation and scalability to projects.",
      "Let's connect, collaborate, and embark on a journey to innovate and shape the future of technology together!",
    ],
    services: [
      {
        title: "DevOps",
        text: "Enthusiastically contributing to streamlined software development and operations processes with a focus on learning and professional growth.",
      },
      {
        title: "Web development",
        text: "Passionately crafting modern and dynamic web experiences while eagerly embracing growth opportunities in the field.",
      },
    ],
    education: [
      {
        title: "FPT University",
        date: "2021 — Present",
        details: ["Major: Software Engineering", "GPA: 8.3/10"],
      },
      {
        title: "Military Academy of Logistics",
        date: "2019-2021",
        details: [
          "Member of the Vietnamese People's Army Cybersecurity Guard",
          "IT helpdesk of the Academy",
          "Major: Transport Commander",
        ],
      },
      {
        title: "Lao Cai High School for Gifted Students",
        date: "2016-2019",
        details: [
          "Chemistry specialized class GPA: 8/10",
          "Member of the Chemistry national specialized team",
        ],
      },
    ],
  },
  vi: {
    about: [
      "👋 Xin chào! Tôi là Hiếu, một người đam mê DevOps với niềm đam mê cho mọi thứ liên quan đến Điện toán đám mây, Bảo mật, và Khoa học Máy tính.",
      "🚀 Với nền tảng vững chắc về các thực hành DevOps, tôi luôn tạo cầu nối giữa phát triển và vận hành, đảm bảo quy trình làm việc mượt mà hơn và triển khai nhanh hơn. Là một người đam mê công nghệ, tôi khai thác sức mạnh của Điện toán đám mây, tận dụng khả năng linh hoạt để mang sự đổi mới và khả năng mở rộ cho các dự án.",
      "Hãy kết nối, hợp tác, và cùng nhau bắt đầu hành trình đổi mới và hình thành tương lai của công nghệ!",
    ],
    services: [
      {
        title: "DevOps",
        text: "Nhiệt tình đóng góp vào quy trình phát triển và vận hành phần mềm được tối ưu hóa với tâm huyết học hỏi và sự phát triển chuyên nghiệp.",
      },
      {
        title: "Phát triển web",
        text: "Tận tâm tạo ra những trải nghiệm web hiện đại và động đáng kể trong việc chấp nhận cơ hội phát triển trong lĩnh vực.",
      },
    ],
    education: [
      {
        title: "Đại học FPT",
        date: "2021 — Hiện tại",
        details: ["Chuyên ngành: Kỹ thuật phần mềm", "Điểm trung bình: 8.3/10"],
      },
      {
        title: "Học viện Quân sự Kỹ thuật Vận tải",
        date: "2019-2021",
        details: [
          "Thành viên của Đội bảo vệ An ninh mạng Quân đội nhân dân Việt Nam",
          "Trạm IT của Học viện",
          "Chuyên ngành: Điều khiển Vận tải",
        ],
      },
      {
        title: "Trường Trung học phổ thông chuyên Lào Cai",
        date: "2016-2019",
        details: [
          "Lớp chuyên Hóa học - Điểm trung bình: 8/10",
          "Thành viên của Đội tuyển Hóa học chuyên quốc gia",
        ],
      },
    ],
  },
};
let currentLanguage = "en";

function toggleLanguage() {
  const globeIcon = document.getElementById("icon-globe");
  globeIcon.classList.add("flip-animation");

  // Remove the animation class after the animation completes
  setTimeout(() => {
    globeIcon.classList.remove("flip-animation");
  }, 1000); // Adjust the time to match the animation duration
  currentLanguage = currentLanguage === "en" ? "vi" : "en";
  updateContent();
}

function updateContent() {
  const languageData = languages[currentLanguage];

  // Update about section
  const aboutParagraphs = document.querySelectorAll(".about-text p");
  aboutParagraphs.forEach((paragraph, index) => {
    paragraph.textContent = languageData.about[index];
  });

  // Update service section
  const serviceItems = document.querySelectorAll(".service-item");
  serviceItems.forEach((item, index) => {
    const titleElement = item.querySelector(".service-item-title");
    const textElement = item.querySelector(".service-item-text");

    titleElement.textContent = languageData.services[index].title;
    textElement.textContent = languageData.services[index].text;
  });
  // Update education section
  const educationItems = document.querySelectorAll(".timeline-item");

  educationItems.forEach((item, index) => {
    const titleElement = item.querySelector(".timeline-item-title");
    const dateElement = item.querySelector("span");
    const detailsElement = item.querySelectorAll(".timeline-text");

    titleElement.textContent = languageData.education[index].title;
    dateElement.textContent = languageData.education[index].date;

    languageData.education[index].details.forEach((detail, detailIndex) => {
      detailsElement[detailIndex].textContent = detail;
    });
  });
}

//#BUG record: fix the contact validation and change color of border when change into light theme
/* #TODO:
 * Completed the information and improve the translate into Vietnamses
 * Design again the resume
 * ....
 */
