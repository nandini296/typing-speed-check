let btn = document.getElementById("btn");
let introcontainer = document.querySelector(".introcontainer");
let typeContainer = document.querySelector(".typeContainer");
let msg = document.getElementById("msg");
let textarea = document.getElementById("typedText");

let btnChange = document.getElementById("btnChange");
let submitBtn = document.getElementById("submitBtn");
let result = document.getElementById("result");

let sentences = [
  "An old man lived in the village. He was one of the most unfortunate people in the world. The whole village was tired of him; he was always gloomy, he constantly complained and was always in a bad mood.",
  "On the way they had to cross a stream. One day the donkey suddenly tumbled down the stream and the salt bag also fell into the water. The salt dissolved in the water and hence the bag became very light to carry. The donkey was happy.Then the donkey started to play the same trick every day.",
  "They kept on walking until they found an oasis, where they decided to take a bath. The one who had been slapped got stuck in the mire and started drowning, but the friend saved him. After he recovered from the near drowning, he wrote on a stone",
  "Once the three pots began to boil, he placed potatoes in one pot, eggs in the second pot and ground coffee beans in the third pot. He then let them sit and boil, without saying a word to his daughter.The daughter, moaned and impatiently waited, wondering what he was doing. After twenty minutes he turned off the burners.",
  "He then explained that the potatoes, the eggs and coffee beans had each faced the same adversity-the boiling water. However, each one reacted differently. The potato went in strong, hard and unrelenting, but in boiling water, it became soft and weak.",
];

textarea.disabled = true;

let startTime, endTime;

var randomNumber = Math.floor(Math.random() * sentences.length);

const startGame = () => {
  let date = new Date();
  startTime = date.getTime();
  msg.innerText = sentences[randomNumber];
};

// Showing Result
const showResult = () => {
  let date = new Date();
  endTime = date.getTime();
  let totaltime = (endTime - startTime) / 1000;
  let totalWords = textarea.value.split(" ").length;
  let wpm = Math.round(totalWords / totaltime) * 60;
  result.innerText = "WPM: " + wpm;
  submitBtn.disabled = true;
  result.classList.toggle("active");
};

// Comparing words
function wordcheck() {
  const givenSentance = sentences[randomNumber];
  typedSentance = textarea.value;

  const checkWith = givenSentance.substring(0, typedSentance.length);

  if (typedSentance == checkWith) {
    textarea.style.borderColor = "#0bb90b";
  } else {
    textarea.style.borderColor = "#d64747";
  }
  // // var a = 0;
  // if(givenSentance.length == textarea.value.length)
  // {

  //     console.log("Equal");
  // }
}

// Go button is clicked
btn.addEventListener("click", () => {
  introcontainer.classList.toggle("active");
  typeContainer.classList.toggle("active");
});

submitBtn.addEventListener("click", () => {
  var myinterval;
  if (submitBtn.innerText == "Start") {
    textarea.disabled = false;
    startGame();
    submitBtn.innerText = "Submit";
    myinterval = setInterval(wordcheck, 500);
  } else {
    textarea.disabled = true;

    showResult();
  }
});

// Changing the text
btnChange.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * sentences.length);
  startGame();
});
