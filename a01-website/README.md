# A01 Website

[CoursePress Page](https://coursepress.lnu.se/kurs/introduction-to-web-programming/part-1-htmlcss-and-js/a01-build-a-website/).

![Web Programming](/web/img/main.jpg)

Template for Assignment 01 (A01).

## Requirements

### **HTML & CSS**

These requirements are mainly related to HTML anc CSS constructs.

#### Stylesheet `css/style.css`

1. Prepare the file `css/style.css` to contain style for the website.
1. Add a comment at the top of the file and add your name and write "A01".


#### Page `page.html`
1. Add a page `page.html`. It should contain four sections/divs, a header, a navbar, a main with an article and a footer.

2. The site header should contain a image, a site title and another site subtitle or slogan of your site.

3. The navbar can be its own section, or included into the header section, your choice. Add a navbar and prepare it to be used to navigate through all the pages on this website.
4. Add a main section with an article containing a h1 and paragraphs and an image within a figure element. You may take a copy of the content of your report page.
5. At the bottom om main, add an article footer containing a byline of your self. It should contain an image and some text about yourself (or the imaginary auther) and add a border around it.
6. Add a site footer that contains a copyright notice with your name and email. Add a url to the CoursePress course webpage to your footer.
7. Add a HTML comment at the bottom of the page, just add "My comment" into it.
8. Add style to your header, navbar and footer. Make it look good.
9. Add style to the figure/img element, add a border around it and make it float right (or left) and wrap the text around it.


#### Page `image.html`
This is to play around with background images.
1. Add a page `image.html`. It should contain the same structure as `page.html`, including the site header/fotter, navbar and en empty main.

2. Add a background image to the page, it should cover the whole background of the browser.
3. Add a new section/div below your header/navbar, call if "flash" and let it stretch the whole browser width and let it contain a representative image.
4. Add another image to the background of the main section. Add some text ontop of it.


#### Normalize and typography
1. Add a page `typography.html`. It should contain the same basic structure as `page.html`, including the site header/footer, navbar and en empty main.

2. Into main, add the [content from the following page](https://gitlab.lnu.se/1dv525/template/a01-website/-/blob/master/example/typography.html). It is examples on a lot of typographic elements.
3. Add another stylesheet from [Normalize.css](https://necolas.github.io/normalize.css/) to normlize your style between different browsers.
4. Work with your own style to update it with fonts, underline, border and white space to make it look nice.
5. Update the style to use one fontfamily for h1-h6 and one font-family for the body text.


#### Form
1. Add a page `form.html`. It should contain the same basic structure as `page.html`, including the site header/footer, navbar and en empty main.

2. Add a HTML form to the main. Create an imaginary form where you should submit your credit card details including name, amount to be drawn from the card, type of card, card number, validity and include a submit button.
3. Use CSS to style the form to make it look good.


#### Table
1. Add a page `table.html`. It should contain the same basic structure as `page.html`, including the site header/footer, navbar and en empty main.

2. Add a HTML table to the main. It should have a header row and at least 5 rows with content, each row should have at least 3 columns of data.
3. Add style to the table so that the style is different on the even and the odd rows in the table. For example, change the background color of each second row in the table. 
 

#### Two column layout `column2.html`
1. Add a page `column2.html`. It should contain the same structure as `page.html`, including the site header/footer, navbar and en empty main.

2. Make the main part look like a two column layout by adding an aside to the left or to the right.
3. Fill the main with some content (copy any suitable text you have available).
4. In the aside, add a block with an header "Related" and a list of links to course related stuff.
5. In the aside, add another block "Todays weather" and add a paragraph with text bout the weather.


#### Three column layout `column3.html`
1. Add a page `column3.html`. It should contain the same structure and content as `column2.html`.

2. Add another column/aside to make the page be a three column layout. Add an image to it.
3. It should be very visible that there are three columns and the main/center column should be the widest column.


#### Site footer triptych
1. Add a triptych (three equal sections on one row) and put it right next to the site footer.

2. In one of the triptychs you should add links to MDN reference manual for HTML, CSS and the W3C Cheetsheat (use a HTML list element).
3. In one triptych you can add links to the HTML, CSS and Unicorn validator, using a list.
4. At the last triptych, add links to the W3C standard for HTML and CSS.


#### Navbar
1. You should be able to navigate through all pages by clicking on the links in the navbar.


#### Mobile responsive
1. Add a page `responsive.html` by taking a copy of your page `column3.html`.

2. Use CSS to make it responsive using media queries by adapting the width/visibility of the three columns when the browser width changes.


#### JavaScript
1. Add a page `javascript.html`.

2. Add your JavaScript code into one file `main.js` and include it into the web page. You may create more JavaScript files if needed if you feel a need to separate your code into different files.

3. With JavaScript, create an array with a wordlist with the words of your choice, use at least twenty words.

4. The web page should contain a button (and some instructions in text). When you press the button a randomized word, from the wordlist, should be displayed in the web page.

5. Show the word in upper case and in lower case, show how many characters the word has and count the number of vowels and consonants in the word.

6. Add an input field where the user can write a character that is read when the button is pressed. Check if the character is within the word and then show YES/NO to the user. It is a bit of a guessing game, the user guesses a character, you randomize a word and checks if the character is within that word and displays it to the user.

7. The character may exist in more than one place in the word (intelligent has two i:s in it) so do also display how many hits the character has and their position in the string.

8. Do organise your code in functions.


