let dark_icon = document.getElementById("span-dark-icon");
let white_icon = document.getElementById("span-white-icon");
let heart_fill = document.querySelectorAll("#heart-fill");
let heart_half = document.querySelectorAll("#heart-half");
let heart_full = document.querySelectorAll("#heart-full");
let body = document.getElementById("body");
let start = document.getElementById("start");
let para_change = document.querySelector(".p-span-div-section-two");
let weather = document.querySelector(".info_hour");
let displayNoneLogo = document.querySelector(".div-span-div-section-two")
let search = document.querySelector(".search");
let logo = document.querySelector(".p-logo-span-div-section-two");
let param = document.querySelector("#param");
let span = document.querySelector(".span-two-div-section-two");
let info_weather = document.querySelector(".info_weather");
let main_section_1 = document.querySelector("#main-section-1");
let color = document.querySelectorAll(".color");
let seach_span = document.querySelector("#search-span");
const tenses = [
  "Hi bro ✨",
  "welcome to my website 🐱‍👤",
  "Enjoy bro 🎶",
  "thank you for support me 🌴",
];
const glow = ["green", "cyan", "brown", "yellow"];

// MAKE OF THE TEXT DIAPORAMA

let counter = 0, i = 0;
change_sentenses = () => {
  para_change.style.boxShadow = glow[i];
  para_change.innerText = tenses[counter];
  counter = (counter + 1) % tenses.length;
  i = (i + 1) % glow.length;
};

change_sentenses();
setInterval(change_sentenses, 5000);

// CHANGE THEME

dark_icon.addEventListener("click", () => {
  document.documentElement.style.setProperty("--dark-gray", "#000000");
  document.documentElement.style.setProperty("--gray", "#171616b2");
  document.documentElement.style.setProperty("--green", "#6C9F44");
  document.documentElement.style.setProperty(
    "--shadow_two",
    "0px 0px 5px 0.5px #6c9f44bd"
  );
  dark_icon.style.visibility = "hidden";
  white_icon.style.visibility = "visible";
  weather.style.color = "white";
  weather.style.fontWeight = "bolder";
  color.style.color = "#ffffff";
});

param.addEventListener("click", () => {
  var styles = window.getComputedStyle(span);
  if (styles.getPropertyValue('visibility') === 'hidden'){
    main_section_1.style.display = "none";
    span.style.visibility = "visible";
    span.style.top = "5px";
    function shine () {
      span.style.outline = "4px solid var(--green)";
      span.style.outline = "1px solid var(--green)";
    }
    shine();
    setTimeout(shine, 10000);
  }else{
    span.style.visibility = "hidden";
    span.style.top = "-60px";
  }
});

search.addEventListener("focus", () => {
  displayNoneLogo.style.width = "100%";
  logo.style.display = "none";
  param.style.display = "none";

});

search.addEventListener("blur", () => {
  function delay () {displayNoneLogo.style.width = "0%"};
  setTimeout(delay, 2000);
  delay();
  logo.style.display = "inline-flex";
  param.style.display = "inline-flex";

});

seach_span.addEventListener("click", () => {
  var styles = getComputedStyle(search);
  displayNoneLogo.style.width = "100%";
  logo.style.display = "none";
  param.style.display = "none";
})

info_weather.addEventListener("click", () => {
  span.style.visibility = "hidden";
  let style_main = window.getComputedStyle(main_section_1);
  if (style_main.getPropertyValue("display") === "none") {
    main_section_1.style.display = "block";
  } else {
    main_section_1.style.display = "none";
  }
})

white_icon.addEventListener("click", () => {
  document.documentElement.style.setProperty("--dark-gray", "#7E7E7E");
  document.documentElement.style.setProperty("--gray", "#A3A3A3");
  document.documentElement.style.setProperty("--green", "#454545");
  document.documentElement.style.setProperty(
    "--shadow_two",
    "0px 0px 5px 0.5px rgba(0, 0, 0, 0.5)"
  );
  white_icon.style.visibility = "hidden";
  dark_icon.style.visibility = "visible";
  weather.style.color = "black";
  weather.style.fontWeight = "bolder";
  color.style.color = "#000000";
});

// displayNoneLogo.addEventListener("click", () => {
//   logo.style.display = "none";
//   alert("hello");
// });

// heart_full.addEventListener('click', () => {
//     heart_full.style.visibility = "hidden";
//     heart_half.style.visibility = "visible";
//     heart_fill.style.visibility = "hidden";
// });

// heart_half.addEventListener('click', () => {
//     heart_half.style.visibility = "hidden";
//     heart_fill.style.visibility = "visible";
//     heart_full.style.visibility = "hidden";
// });

// heart_fill.addEventListener('click', () => {
//     heart_fill.style.visibility = "hidden";
//     heart_full.style.visibility = "visible";
//     heart_half.style.visibility = "hidden";
// });

// GO BACK TO THE TOP

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  if (window.scrollY < 80) {
    start.style.transform = "translateY(100px)";
    body.style.transition = "all 1s .1s ease-in-out";
  } else {
    start.style.transform = "translateY(-150px)";
  }
});

// document.addEventListener('scroll', (e) => {
//     console.log(e);
// });

MAJ();

function MAJ() {
  let now = new Date();
  let hours = "h";
  let minutes = "m";
  let second = "s"
  let day = now.getDay();
  let month = now.getMonth();
  let date = now.getDate();
  if (now.getHours() < 10){
    hours = "0"+now.getHours()
  }else{
    hours = now.getHours();
  }

  if (now.getMinutes() < 10){
    minutes = "0"+now.getMinutes()
  }else{
    minutes = now.getMinutes();
  }

  if (now.getSeconds() < 10){
    second = "0"+now.getSeconds()
  }else{
    second = now.getSeconds();
  }

  if (now.getDate() < 10){
    date = "0"+now.getDate();
  }else{
    date = now.getDate();
  }

  switch(day) {
    case 1: day = "Lundi";
            break;
    case 2: day = "Mardi";
            break;
    case 3: day = "Mercredi";
            break;
    case 4: day = "Jeudi";
            break;
    case 5: day = "Vendredi";
            break;
    case 6: day = "Samedi";
            break;
    case 7: day = "Dimanche";
            break;
    default: ;
            break;
  }

  switch(month) {
    case 0: month = "Janvier";
            break;
    case 1: month = "Fevrier";
            break;
    case 2: month = "Mars";
            break;
    case 3: month = "Avril";
            break;
    case 4: month = "Mai";
            break;
    case 5: month = "Juin";
            break;
    case 6: month = "Juillet";
            break;
    case 7: month = "Août";
            break;
    case 8: month = "Septembre";
            break;
    case 9: month = "Octobre";
            break;
    case 10: month = "Novembre";
            break;
    case 11: month = "Décembre";
            break;
    default: ;
            break;
  }

  let time =
    "" + hours + " : " + minutes + " : " + second +" | " + day + ", "+ date + " " + month ;

  // second.style.color = "blue";

  weather.innerHTML = time;
}

setInterval(MAJ, 1000);
