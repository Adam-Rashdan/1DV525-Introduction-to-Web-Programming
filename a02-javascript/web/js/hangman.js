/**
 * Showing off how to display/hide parts of a SVG-image.
 */
window.Hangman = (function () {
  "use strict";

  let wordStatus = null;
  var answer = "";
  let guessed = [];
  let mistakes = 0;
  let maxWrong = 8;

  var hangman = {
    // Get all elements as their id
    partAsElement: {
      hill: document.getElementById("hang_hill"),
      gallow: document.getElementById("hang_construction"),
      body: document.getElementById("hang_body"),
      rightarm: document.getElementById("hang_rightarm"),
      leftarm: document.getElementById("hang_leftarm"),
      rightleg: document.getElementById("hang_rightleg"),
      leftleg: document.getElementById("hang_leftleg"),
      rope: document.getElementById("hang_rope"),
      head: document.getElementById("hang_head"),
    },

    // Create an array with all valid parts
    validParts: [
      "hill",
      "gallow",
      "body",
      "rightarm",
      "leftarm",
      "rightleg",
      "leftleg",
      "rope",
      "head",
    ],

    // Creat an arry with words list
    wordlist: [
      "greet",
      "campaign",
      "coffee",
      "care",
      "revise",
      "ridge",
      "pilot",
      "full",
      "prison",
      "wrestle",
      "account",
      "dictionary",
      "start",
    ],

    /**
     * Check if part a valid part, writes error message to console if the part is invalid.
     *
     * @param string part Name of the part to check.
     *
     * @returns boolean true if valid part, else false.
     */
    isValid: function (part) {
      if (this.validParts.indexOf(part) === -1) {
        window.console.log("The part is not valid: " + part);
        return false;
      }
      window.console.log("The part is valid: " + part);
      return true;
    },

    /**
     * Hide a part.
     *
     * @param string part Name of the part to hide.
     *
     * @returns void.
     */
    hide: function (part) {
      if (this.isValid(part)) {
        window.console.log("Hiding part: " + part);
        this.partAsElement[part].style.display = "none";
      }
    },

    /**
     * Show a part.
     *
     * @param string part Name of the part to show.
     *
     * @returns void.
     */
    show: function (part) {
      if (this.isValid(part)) {
        window.console.log("Showing part: " + part);
        this.partAsElement[part].style.display = "inline";
      }
    },

    hideAll: function () {
      for (let i = 1; i < this.validParts.length; i++)
        this.partAsElement[this.validParts[i]].style.display = "none";

      mistakes = 0;
      guessed = [];
      document.getElementById("mistakes").innerHTML = mistakes;
    },

    randomWord: function () {
      answer = this.wordlist[Math.floor(Math.random() * this.wordlist.length)];
      //   return this.wordlist[Math.floor(Math.random() * this.wordlist.length)];
      //   wordStatus = answer;

      console.log(answer);
    },

    generateButtons: function () {
      let buttonsHTML = "abcdefghijklmnopqrstuvwxyz"
        .split("")
        .map(
          (letter) =>
            `
        <button
          class="key__button"
          id='` +
            letter +
            `'
          onClick = "Hangman.guessHandler('` +
            letter +
            `')"
        >
          ` +
            letter +
            `
        </button>
      `
        )
        .join("");

      document.getElementById("keyboard").innerHTML = buttonsHTML;
    },

    guessWord: function () {
      wordStatus = answer
        .split("")
        .map((letter) => (guessed.indexOf(letter) >= 0 ? letter : " _ "))
        .join("");
      document.getElementById("guess").innerHTML = wordStatus;
    },

    mistakesHandler: function () {
      document.getElementById("mistakes").innerHTML = mistakes;
    },

    wonGame: function () {
      if (wordStatus === answer) {
        document.getElementById("keyboard").innerHTML = "<h3>You Won!!! </h3>";
      }
    },

    lostGame: function () {
      if (mistakes === maxWrong) {
        document.getElementById("guess").innerHTML =
          "<h3>The answer was: </h3>" + `<h2> ` + answer + `</h2>`;
        document.getElementById("keyboard").innerHTML = "<h1>You Lost!!!</h1>";
      }
    },

    updatePic: function () {
      this.partAsElement[this.validParts[mistakes]].style.display = "inline";
    },

    guessHandler: function (inputLetter) {
      guessed.indexOf(inputLetter) < 0 ? guessed.push(inputLetter) : null;
      document.getElementById(inputLetter).setAttribute("disabled", true);

      if (answer.indexOf(inputLetter) >= 0) {
        Hangman.guessWord();
        Hangman.wonGame();
      } else if (answer.indexOf(inputLetter) < 0) {
        mistakes += 1;
        Hangman.mistakesHandler();
        Hangman.lostGame();
        Hangman.updatePic();
      }
    },
  };

  window.console.log(
    "You can now use the hangman object as a part of the window-object." +
      "Try\n\nwindow.Hangman.hide('gallow')\nwindow.Hangman.show('gallow')" +
      "\n\nHere are all the parts you can work on."
  );

  document.getElementById("maxWrong").innerHTML = ": " + maxWrong;
  window.console.log(hangman.validParts);

  // Return the object to make it visible.
  return hangman;
})();
