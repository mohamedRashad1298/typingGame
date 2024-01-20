let words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing",
];

const lvls = {
  'Easy':5,
  'Normal':3,
  'Hard': 2,
};

// Default Level
let defaultLevelName = "Normal"; // Change Level From Here


// Catch Selectors
const startButton = document.querySelector(".start");
const lvlNameSpan = document.querySelector(".message .lvl");
const secondsSpan = document.querySelector(".message .seconds");
const theWord = document.querySelector(".the-word");
const upcomingWords = document.querySelector(".upcoming-words");
const input = document.querySelector(".input");
const timeLeftSpan = document.querySelector(".time span");
const scoreGot = document.querySelector(".score .got");
const scoreTotal = document.querySelector(".score .total");
const finishMessage = document.querySelector(".finish");

scoreTotal.textContent=words.length;

defaultStart();

function defaultStart(){
  let X = lvlNameSpan.value;
  let defaultLevelSeconds = lvls[X];
  secondsSpan.textContent = defaultLevelSeconds;
  timeLeftSpan.textContent = defaultLevelSeconds;
}

lvlNameSpan.addEventListener("change", defaultStart);

// input.onpaste = function(){
//   return false ; 
// }

startButton.addEventListener('click',function(){
this.remove();
input.focus();
GeneratWords();
});


function GeneratWords(){
  let randomWord = words[Math.floor(Math.random() * words.length)];
  let wordIndex = words.indexOf(randomWord);
  words.splice(wordIndex,1);
  upcomingWords.textContent= '';
theWord.textContent= randomWord;

  for(let el of words){
  let html = `
  <div>${el}</div>
  `
  upcomingWords.insertAdjacentHTML('beforeend',html);
  }
  StartPlayHandeler();
}


function StartPlayHandeler(){

  let startGM = setInterval(()=>{
timeLeftSpan.textContent--;
if(timeLeftSpan.textContent <= 0 ){
  clearInterval(startGM);

if(theWord.textContent.toLocaleLowerCase() === input.value.toLocaleLowerCase() ){
  input.value="";
  theWord.textContent;
  scoreGot.textContent++;
 

if(words.length > 0){
 defaultStart();
 GeneratWords();
}else{
  let win = `
  <span class ="good">Bravo You win</span>
  `
  finishMessage.insertAdjacentHTML("beforeend", win);
}

}else{
  let span = `
  <span class ="bad">Game Over</span>
  `
  finishMessage.insertAdjacentHTML('beforeend',span)
}

}
  },1000)
}