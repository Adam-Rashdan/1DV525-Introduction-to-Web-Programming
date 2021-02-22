# A02 JavaScript

Template for assignment A02 "Code JavaScript with browser".

## Introduction to Web programming assignment 02

[Web programming course press](https://gitlab.lnu.se/1dv525/student/rq222ah/a02-javascript)

# Requirements

### Startup

These are the requirements to fullfill the assignment.

1. You have a git repo on GitLab named "a02-javascript", available below your lnu student acronym in the course at GitLab. Start of by cloning the repo to your computer ("xxx" is your lnu-username):
   `# Using ssh git clone git@gitlab.lnu.se:1dv525/student/xxx/a02-javascript.git`


1. The repo has a `README.md` written in Markdown, open it up and add text describing the assignment and add a url to the page on CoursePress that formulates the requirements for the assignment. Do also add a representative image for the assignment.

2. Create a directory `web/`, here you shall save all your resources for the website.

3. Save the images in the directory `web/img/`. Use only low caps, to avoid mixing caps and getting into trouble on Mac/Unix.

4. Save your stylesheets in the directory `web/css/`.

5. Save your JavaScript files in the directory `web/js/`.

6. Create a favicon image and use it on all pages.

7. Add a navbar to your web pages so it is easy to navigate your site.

## PART 1: Hangman

These requirements are related to the first part which is a standalone application where you are to build your own version of the game Hangman in JavaScript. See the Wikipedia for [details on the Hangman game](<https://en.wikipedia.org/wiki/Hangman_(game)>).

1. Create the page `hangman.html` and implement the Hangman game in it.
2. You may reuse the Hangman code and SVG-image provided in the example repo, as presented in the lecture.
3. Organise you JavaScript code according to any/all of the following code constructs (use at least one of the following):
   * The module design pattern.
   * JavaScript objects with `new Object` and `Object.prototype`.
4. Add a set of linters and minifiers (at least one of each) and make them a part of your development environment, saved in `package.json`.
   Execute them all through `npm run test` (validators) and `npm run build` (minifiers).

5. Ensure that `npm run test` and `npm run build` executes without errors.

## PART 2: Quiz

These requirements are related to the second part which is a standalone application where you are to build a frontend to a REST Quiz game. You are to implement a client which uses a existing [Quiz server](http://courselab.lnu.se/question/1) to retrieve and answer quiz questions.

1. Create the directory quiz/, in the root of the repo, as a Snowpack App using the command `npx create-snowpack-app quizz --template @snowpack/app-template-blank`. Do not forget to remove the sub directory `quizz/.git` to avoid creating a new Git repo.

2. In the directory `quiz/`, the command `npm run build` should build the app and `npm run start` should start the Snowpack development server with the application running.
3. Read more on the functional and non functional requirements for the Quiz application in the [README_Quiz.md](https://gitlab.lnu.se/1dv525/template/a02-javascript/-/blob/master/README_Quiz.md)
