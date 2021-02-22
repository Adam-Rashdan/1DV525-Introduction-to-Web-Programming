/**
 * Try out fetching
 **/

import Quiz from './modules/quizz.js';

const content = document.getElementById('content');
const userAnswer = document.getElementById('answer');
const userName = document.getElementById('name');
const linkE = document.getElementById('submit');
const linkF = document.getElementById('linkF');
const nameSub = document.getElementById('nameSub');
const restartBtn = document.getElementById('restart');
const alternatives = document.getElementById('radioAlt');


let nextUrl = null;
let display = document.getElementById('time');
let name;

/**
 * Update the webpage with some content.
 */
function updateContent(str) {
  content.innerHTML = str;
}

/**
 *  submit player name
 */
nameSub.addEventListener('click', function () {
  let status = 'NickName : ';
  name = userName.value;

  if (checkPlayername(name)) {
    userName.disabled = true;
    document.getElementById('nameSub').disabled = true;
    start();
  } else {
    console.log('SORRY');
  }
});


function checkPlayername(name) {

  if (name == '') {
    console.log('you need to choose a nickname!');
    return false;
  }

  let body = {
    name: name,
  };
  return true;
}

window.addEventListener('load', function () {
  userAnswer.hidden = true;
  linkE.hidden = true;
  document.getElementById('timeSection').hidden = true;
  document.getElementById('linkF').hidden = true;
  document.getElementById('restart').hidden = true;
});

/**
 *
 * @constructor
 */
function start() {
  // let status = "Clicked D"
  userAnswer.hidden = false;
  linkE.hidden = false;
  document.getElementById('timeSection').hidden = false;
  document.getElementById('linkF').hidden = false;
  document.getElementById('restart').hidden = true;

  Quiz.timer(15, false, display, name);


  Quiz.getFirstQuestion()
      .then((response) => {
        console.log(response);

        response.json().then((data) => {
          updateContent(JSON.stringify(data.question, null, 4));
          console.log(data);

          nextUrl = data.nextURL;
        });
      })
      .catch((err) => {
        console.log('Fetch Error :-S', err);
      });
}

/**
 * Restart the quiz
 */
restartBtn.addEventListener('click', () => {
  window.location.reload();
});


/**
 *
 */
linkE.addEventListener('click', () => {
  // let status = "Clicked E"
  let id = '';

  if (alternatives.firstChild != null) {
    let alt = document.getElementsByName('multiChoice');
    console.log('HERE ' + alt);
    alt.forEach((i) => {
      if (i.checked) {
        id = i.value;
      }
    });
  } else {
    id = userAnswer.value;
  }

  let body = {
    answer: id,
  };

  Quiz.timerHandler();

  Quiz.sendQuestionResponsePost(nextUrl, body)
      .then((response) => {
        console.log(response);

        response.json().then((data) => {
          if (!data.hasOwnProperty('nextURL')) {
            console.log(data);
            document.getElementById('next').hidden = true;
            document.getElementById('submit').hidden = true;
            document.getElementById('restart').hidden = false;
            updateContent("Congratulation you've won!");
          }

          linkE.disabled = true;
          answer.disabled = true;
          updateContent(JSON.stringify(data.message, null, 4));
          console.log(data);
          nextUrl = data.nextURL;

          while (alternatives.firstChild) {
            alternatives.removeChild(alternatives.firstChild);
          }

          userAnswer.value = '';
        });
      })
      .catch((err) => {
        updateContent(err.message);
        document.getElementById('next').hidden = true;
        document.getElementById('restart').hidden = false;
        linkE.hidden = true;
        userAnswer.hidden = true;
        console.log('Fetch Error :-S', err);
      });
});

/**
 *
 */
linkF.addEventListener('click', () => {
  // let status = "Clicked F"
  let id = userAnswer.value;

  userAnswer.hidden = false;
  linkE.disabled = false;
  answer.disabled = false;

  Quiz.timer(15, true, display, name);



  Quiz.getQuestion(nextUrl)
      .then((response) => {
        console.log(response);

        response.json().then((data) => {
          if (data.hasOwnProperty('alternatives')) {
            let altLen = Object.keys(data.alternatives).length;

            let allAlt = [];

            // Get question's alternatives
            for (let i = 0; i < Object.keys(data.alternatives).length; i++) {
              allAlt.push(Object.values(data.alternatives)[i]);
            }


            for (let i = 0; i < altLen; i++) {
              //Creat radio buttons for alternatives
              let input = document.createElement('input');
              input.type = 'radio';
              input.value = 'alt' + (i + 1);
              input.name = 'multiChoice';
              input.setAttribute('style', 'vertical-align:middle;');
              input.setAttribute('style', 'float:left;');
              input.setAttribute('style', 'margin-left:20%;');
              alternatives.append(input);

              let label = document.createElement('label');
              input.setAttribute('style', 'margin:10px;');
              label.innerHTML = allAlt[i] + '<br>';
              alternatives.append(label);
            }

            userAnswer.hidden = true;
          }

          updateContent(JSON.stringify(data.question, null, 4));
          console.log(data);

          nextUrl = data.nextURL;
        });
      })
      .catch((err) => {
        console.log('Fetch Error :-S', err);
        document.getElementById('restart').hidden = false;
        linkE.hidden = true;
        userAnswer.hidden = true;
      });
});

