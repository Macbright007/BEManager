const wrapper = document.querySelector(".extensionWrapper");
const navLogo = document.querySelector(".navLogo");
const themeButton = document.querySelector(".btn");
const buttonAll = document.querySelector(".btn1");
const buttonActive = document.querySelector(".btn2");
const buttonInactive = document.querySelector(".btn3");
const themeIcon = document.getElementById("toggleImg");
const nav = document.getElementById("navBar");

const extensions = [
  {
    logo: "./images/logo-devlens.svg",
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    logo: "./images/logo-style-spy.svg",
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    logo: "./images/logo-speed-boost.svg",
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    logo: "./images/logo-json-wizard.svg",
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    logo: "./images/logo-tab-master-pro.svg",
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    logo: "./images/logo-viewport-buddy.svg",
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    logo: "./images/logo-markup-notes.svg",
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    logo: "./images/logo-grid-guides.svg",
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    logo: "./images/logo-palette-picker.svg",
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    logo: "./images/logo-link-checker.svg",
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    logo: "./images/logo-dom-snapshot.svg",
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    logo: "./images/logo-console-plus.svg",
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];

// 5 steps to create an element or a tag from js and add it to html
// step 1 : create the element or tag
// const el = document.createElement("h1")
// // step 2: give the created element a classname (option)
// el.classList.add("newelement")
// // step3: create the content you want to add to the new element
// elContent = "i have just been added with js"
// // step4: add the content to the created element
// el.innerHTML = elContent
// // step5: add the created element to html
// wrapper.appendChild(el)

const themeToggler = () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");

  // Swap image based on theme
  // themeIcon.src = isDark ? './images/icon-moon.svg' : './images/icon-sun.svg';
  themeIcon.src = isDark ? "./images/icon-sun.svg" : "./images/icon-moon.svg";
  themeIcon.alt = isDark ? "Moon Icon" : "Sun Icon";

  if (isDark) {


    nav.style.backgroundColor = "hsl(225, 23%, 24%)";
    themeButton.style.backgroundColor = "hsl(226, 11%, 37%)";
    buttonAll.style.color = "hsl(227, 75%, 14%)";
    buttonActive.style.backgroundColor = "hsl(226, 11%, 37%)";
    buttonInactive.style.backgroundColor = "hsl(226, 11%, 37%)";
    extensionCard.style.backgroundColor = "hsl(226, 11%, 37%)";
    buttonActive.style.color = "#fff";
    buttonInactive.style.color ="#fff";
    nav.style.color = "#fff";
    navLogo.style.color = "#fff";


  } else {


    nav.style.backgroundColor = "#fff";
    nav.style.color = "#000";
    themeButton.style.backgroundColor = "";
    buttonActive.style.color = "";
    buttonInactive.style.color ="";
    buttonActive.style.backgroundColor = "";
    buttonInactive.style.backgroundColor = "";


  }
};

themeButton.addEventListener("click", themeToggler);

// function to create card
function createCard(item) {
  card = document.createElement("div");

  card.classList.add("extensionCard");

  cardContent = `
        <div class="extensionCardTop">
              <img src=${item.logo} alt="dev lens" />

              <div class="cardContent">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
              </div>
        </div>

         <div class="cardToggler">
              <button class="btnRemove">remove</button>
              <input type="file" id="toggle">
            </div>
    `;

  card.innerHTML = cardContent;

  wrapper.appendChild(card);
}

extensions.map(function (item) {
  return createCard(item);
});
// extensions
//   .filter((item) => {
//     return item.isActive === true;
//   })
//   .map(function (item) {
//     return createCard(item);
//   });
