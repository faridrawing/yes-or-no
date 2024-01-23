const closeButton = document.querySelector("header .close-button");
const noButton = document.querySelector("main .button-group .no");
const yesButton = document.querySelector("main .button-group .yes");
let maxWidth = document.documentElement.clientWidth;
let maxHeight = document.documentElement.clientHeight;
let minWidth = Math.min(document.documentElement.clientWidth, window.innerWidth || 0);
let minHeight = Math.min(document.documentElement.clientHeight, window.innerHeight || 0);
let defaultMessage = document.getElementById("message").textContent;
let timeOut = 150;

window.addEventListener("resize", () => {
  maxWidth = document.documentElement.clientWidth;
  maxHeight = document.documentElement.clientHeight;
  minWidth = Math.min(document.documentElement.clientWidth, window.innerWidth || 0);
  minHeight = Math.min(document.documentElement.clientHeight, window.innerHeight || 0);
});

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

noButton.addEventListener("click", () => {
  const confirmBox = document.querySelector(".confirm-box");
  const boxWidth = confirmBox.offsetWidth;
  const boxHeight = confirmBox.offsetHeight;

  const xPosition = generateRandomNumber(0, maxHeight - boxHeight);
  const yPosition = generateRandomNumber(0, maxWidth - boxWidth);

  confirmBox.style.opacity = "0";
  confirmBox.style.left = `${yPosition}px`;
  confirmBox.style.top = `${xPosition}px`;
  confirmBox.style.transform = "scale(0)";

  setTimeout(() => {
    confirmBox.style.opacity = "1";
    confirmBox.style.transform = "scale(1)";
  }, timeOut);
});

yesButton.addEventListener("click", () => {
  const confirmBox = document.querySelector(".confirm-box");
  const titleBox = document.getElementById("title-box");
  let message = "I'm glad to hear that! Let us know if there's anything else we can help you with \uD83D\uDE0A \uD83D\uDE0A \uD83D\uDE0A.";

  confirmBox.style.opacity = "0";
  confirmBox.style.transform = "scale(0)";

  setTimeout(() => {
    confirmBox.style.opacity = "1";
    confirmBox.style.transform = "scale(1)";
  }, timeOut);

  confirmBox.style.left = "";
  confirmBox.style.top = "";

  titleBox.textContent = "Message";
  document.querySelector("main .button-group").style.display = "none";
  document.getElementById("message").textContent = message;
});

closeButton.addEventListener("click", () => {
  const confirmBox = document.querySelector(".confirm-box");
  const titleBox = document.getElementById("title-box");

  confirmBox.style.left = "";
  confirmBox.style.top = "";
  titleBox.textContent = "Confirm";
  document.querySelector("main .button-group").style.display = "";
  document.getElementById("message").textContent = defaultMessage;
});
