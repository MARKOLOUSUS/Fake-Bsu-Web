function showMVCV() {
  const content = document.getElementById("content");

  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

const texts = [
    "🎥Orientation for New Red Spartan Students🆕",
    "📅Collegiate Calendar  2026-2027🆕",
    "🚑Multi-Hazard Emergency Preparedness Guide🆕",
    "☎️Emergency Contact Numbers🆕"
];
let index = 0;
function updateText() {
    document.getElementById("displayText").innerText = texts[index];
}
function nextText() {
    index = (index + 1) % texts.length; // loop forward
    updateText();
}
function prevText() {
    index = (index - 1 + texts.length) % texts.length; // loop backward
    updateText();
}


const images = [
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png"
];

let indexImg = 0;
function updateImage() {
    document.getElementById("slider").src = images[indexImg];
}

function nextImage() {
    indexImg = (indexImg + 1) % images.length;
    updateImage();
}

function prevImage() {
    indexImg = (indexImg - 1 + images.length) % images.length;
    updateImage();
}

function showHome() {
  const content = document.getElementById("home");

  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

function showNews() {
  const content = document.getElementById("news");

  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

function showAdvisories() {
  const content = document.getElementById("advisories");

  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

function showSchedules() {
  const content = document.getElementById("schedule");

  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

function showDownloads() {
  const content = document.getElementById("downloads");

  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

function IDK(){
  alert("Idk how to make this yet(W.I.P.)")
}