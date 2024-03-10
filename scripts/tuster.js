const closeIcon = document.querySelector(".fa-close");
const universeContainer1 = document.querySelector(".btn-1-container-universe");
const universeContainerLight1 = document.querySelector(".btn-1-container-universe-light");
const openContainer1 = document.querySelector(".btn-1");
const openContainerLight1 = document.querySelector(".btn-light-1");
const body = document.querySelector("body");
const nextBtn = document.querySelector(".next-btn");
const navBar = document.querySelector(".nav-bar");
const inputBox = document.querySelector("#input-box-1");
const popupColorChange = document.querySelector(".popup-color-change");

/* light-mode */
const darkMode = document.querySelector('.dark-mode');
const gitHub = document.querySelector('.git-hub');
const faSun = document.querySelector('.fa-sun');
const brand = document.querySelector('.brand');
const faMoon = document.querySelector('.fa-moon');
const faGitHub = document.querySelector('.fa-github');
const lightModeheading = document.querySelector('.light-mode-heading');
const heading1 = document.querySelector('.section-heading-1')
const heading2 = document.querySelector('.section-heading-2')
const heading3 = document.querySelector('.section-heading-3')
const the = document.querySelector('.the')
const firstHeading = document.querySelector('.first-heading')
const lastHeading = document.querySelector('.last-heading')
const secondHeading = document.querySelector('.second-heading')
const thirdHeading = document.querySelector('.third-heading')



const avtarContainer = document.querySelector(".avtar-container");
const avtarContainer2 = document.querySelector(".avtar-container-2");
const avtarContainer3 = document.querySelector(".avtar-container-3");
const avtarContainer4 = document.querySelector(".avtar-container-4");
const avtarContainer5 = document.querySelector(".avtar-container-5");

const main = document.querySelector("main");
const closeIcon2 = document.querySelector(".fa-close-2");
const universeContainer2 = document.querySelector(".btn-2-container-universe");
const openContainer2 = document.querySelector(".btn-2");
const loginBtn = document.querySelector(".login-btn");

// Function to open modal 1
function openModal1() {
  universeContainer1.classList.add("open-container-for-btn-1");
  body.classList.add("body-color-for-btn-1");
  removeModal2();

  if (true) {
    navBar.classList.add("nav-bar-color");
  }
}

// Function to remove modal 1
function removeModal1() {
  universeContainer1.classList.remove("open-container-for-btn-1");
  body.classList.remove("body-color-for-btn-1");
  navBar.classList.remove("nav-bar-color");
}

// Function to open modal 2
function openModal2() {
  universeContainer2.classList.add("open-container-for-btn-2");
  body.classList.add("body-color-for-btn-2");

  removeModal1();

  if (true) {
    navBar.classList.add("nav-bar-color");
  }
}

// Function to remove modal 2
function removeModal2() {
  universeContainer2.classList.remove("open-container-for-btn-2");
  body.classList.remove("body-color-for-btn-2");
  navBar.classList.remove("nav-bar-color");
}

openContainer1.addEventListener("click", openModal1);
closeIcon.addEventListener("click", removeModal1);
nextBtn.addEventListener("click", removeModal1);

openContainer2.addEventListener("click", openModal2);
closeIcon2.addEventListener("click", removeModal2);
loginBtn.addEventListener("click", removeModal2);

function closePopup() {
  removeModal1();
  removeModal2();
}

// Add event listener to close modals when scrolling
window.addEventListener("scroll", closePopup);

// this code, I wrote with the help of ChaptGpt!!!!!!!!!!!!
// Add event listener to the body to close modals when clicking outside
document.body.addEventListener("click", function (event) {
  const target = event.target;
  if (
    !target.closest(".btn-1") &&
    !target.closest(".btn-2") &&
    !target.closest(".btn-1-container-universe") &&
    !target.closest(".btn-2-container-universe") &&
    !target.matches("input")
  ) {
    removeModal1();
    removeModal2();
  }
});


darkMode.addEventListener('click', () => {
  if (faSun.classList.contains('fa-sun')) {
    // Dark mode is active
    faSun.classList.remove('fa-sun');
    faSun.classList.add('fa-moon');
    body.classList.add('light-mode-body');
    navBar.classList.add('light-mode-nav-bar');
    brand.classList.add('light-mode-brand');
    gitHub.classList.add('light-mode-git-hub');
    darkMode.classList.add('light-mode');
    faSun.style.color = 'black';
    faGitHub.style.color = 'black';
    lightModeheading.style.color = 'black';
    heading1.style.color = 'black';
    heading2.style.color = 'black';
    heading3.style.color = 'black';
    the.style.color = 'black';
    avtarContainer.classList.add('avtar-container-light');
    avtarContainer2.classList.add('avtar-container-light');
    avtarContainer3.classList.add('avtar-container-light');
    avtarContainer4.classList.add('avtar-container-light');
    avtarContainer5.classList.add('avtar-container-light');
    firstHeading.style.color = 'black'
    lastHeading.style.color = 'black'
    secondHeading.style.color = 'black'
    thirdHeading.style.color = 'black'


    // Other light mode changes...
  } else if (faSun.classList.contains('fa-moon')) {
    // Light mode is active
    faSun.classList.remove('fa-moon');
    faSun.classList.add('fa-sun');
    body.classList.remove('light-mode-body');
    navBar.classList.remove('light-mode-nav-bar');
    brand.classList.remove('light-mode-brand');
    gitHub.classList.remove('light-mode-git-hub');
    darkMode.classList.remove('light-mode');
    faSun.style.color = 'white';
    faGitHub.style.color = 'white';
    lightModeheading.style.color = 'var(--color)';
    heading1.style.color = 'white';
    heading2.style.color = 'white';
    heading3.style.color = 'white';
    the.style.color = 'white';
    avtarContainer.classList.remove('avtar-container-light');
    avtarContainer2.classList.remove('avtar-container-light');
    avtarContainer3.classList.remove('avtar-container-light');
    avtarContainer4.classList.remove('avtar-container-light');
    avtarContainer5.classList.remove('avtar-container-light');
    firstHeading.style.color = 'var(--color)'
    lastHeading.style.color = 'var(--color)'
    secondHeading.style.color = 'var(--color)'
    thirdHeading.style.color = 'var(--color)'
  }
});
