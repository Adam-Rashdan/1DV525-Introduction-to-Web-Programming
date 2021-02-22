const wordlist = [
  "Greet",
  "Campaign",
  "Coffee",
  "Care",
  "Revise",
  "Ridge",
  "Pilot",
  "Full",
  "Prison",
  "Wrestle",
  "Account",
  "Dictionary",
  "Start",
  "Giant",
  "Fast",
  "Monarch",
  "Patrol",
  "Bear",
  "Detective",
  "Trouser",
  "Title",
  "Speaker",
];

function randomWord() {
  word = wordlist[Math.floor(Math.random() * 20)];
  return word;
}

var word = randomWord();

function showRandom() {
  document.getElementById("word").innerText =
    randomWord() +
    "\n" +
    "Word in upper case: " +
    word.toUpperCase() +
    "\n" +
    "Word in lower case: " +
    word.toLowerCase();
  +"\n" + "Number of vowels in  ";

  document.getElementById("vow").innerText =
    "Number of vowels is: " +
    checkVowels() +
    "\n" +
    "Number of consonants is: " +
    checkConsonants();
}

function checkVowels() {
  let vowels = 0;
  for (let i = 0; i < word.length; i++) {
    if (
      word[i].toLowerCase() === "a" ||
      word[i].toLowerCase() === "e" ||
      word[i].toLowerCase() === "u" ||
      word[i].toLowerCase() === "i" ||
      word[i].toLowerCase() === "y" ||
      word[i].toLowerCase() === "o"
    )
      vowels++;
  }

  return vowels;
}

function checkConsonants() {
  return word.length - checkVowels();
}

function checkLetter() {
  var count = 0;
  let randWord = randomWord();
  for (var i = 0; i < randWord.length; i++) {
    if (
      document.getElementById("letter").value.toLowerCase() ===
      randWord[i].toLowerCase()
    )
      count++;
  }

  if (count !== 0) {
    document.getElementById("answer").innerText =
      "The Random word is: " +
      randWord +
      " \n Yes there is letter " +
      document.getElementById("letter").value.toUpperCase() +
      " in it";
  } else
    document.getElementById("answer").innerText =
      "The Random word is: " +
      randWord +
      "\n No there is no letter " +
      document.getElementById("letter").value.toUpperCase() +
      " in it";

  return count;
}

function getIndex() {
  var str = [];
  for (var i = 0; i < word.length; i++) {
    if (
      document.getElementById("letter").value.toLowerCase() ===
      word[i].toLowerCase()
    )
      str.push(i + 1);
  }
  return str.toString();
}

function indexNum() {
  if (document.getElementById("letter").value !== "") {
    document.getElementById("result").innerText =
      "Found the letter  " +
      document.getElementById("letter").value.toUpperCase() +
      " at position: " +
      getIndex();
  } else document.getElementById("result").innerText = "Type a Letter to check";
}
