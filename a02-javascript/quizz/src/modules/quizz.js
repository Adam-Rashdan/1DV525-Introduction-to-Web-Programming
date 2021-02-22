/**
 * Sample module to use for Quizz using async await
 */
async function getFirstQuestion() {
  const url="http://courselab.lnu.se/question/1"
  const response = await fetch(url)
  if (!response.ok) {
    let data = await response.json()

    console.log(response)
    console.log(JSON.stringify(data, null, 4))

    throw new Error(`HTTP error! status: ${response.status}`);
  }
  console.log(response)
  return response
}



async function sendQuestionResponsePost(url, body) {
  const data = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }
  const response = await fetch(url, data)

  if (!response.ok) {
    let data = await response.json()

    console.log(response)
    console.log(JSON.stringify(data, null, 4))

    throw new Error(data.message);
  }

  console.log(response)

  return response
}

/**
 *
 * @param url
 * @returns {Promise<Response>}
 */

async function getQuestion(url) {
  const data = {
    method: "GET",
  }

  if (url == "http://courselab.lnu.se/question/326") {
    url = "http://mikaelroos.se:3001/question/326"
  }
  const response = await fetch(url, data)
  console.log(response)

  if (!response.ok) {
    let data = await response.json()

    console.log(response)
    console.log(JSON.stringify(data, null, 4))
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  console.log(response)
  return response
}

let countdown;
let counter;


/**
 *  reset Timer
 */
function timerHandler(){
  clearInterval(countdown);
}

/**
 *
 * @param period
 * @param reset
 * @param display
 * @param userName
 */
function timer(period, reset, display, userName){
  if (reset == true) {
    timerHandler();
  }
  counter = period
  countdown = setInterval(function() {
    counter--;
    display.textContent = counter + " second";
    if (counter<=0) {
      clearInterval(countdown);
      console.log("You have lost!")
      display.textContent = "You have lost! Please restart again.";
      document.getElementById("linkF").hidden = true;
      document.getElementById("restart").hidden = false;
      document.getElementById("radioAlt").hidden = true;
      document.getElementById("answer").hidden = true;
      document.getElementById("submit").hidden = true;

    }
  }, 1000);
}



export default {
  getFirstQuestion,
  sendQuestionResponsePost,
  getQuestion,
  timer,
  timerHandler,
};
