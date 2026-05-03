WORDLY : A word search app
Introduction

This is a single page application called Wordly that allows users to search for word definitions, synonyms and pronunciations, which are fetched from the Free Dictionary API. The project combines HTML, CSS and Javascript languages.

Tools and Resources
Code editor eg Visual Studio Code
Node.js environment
Developer tools
Version control(github)
Dictionary API (https://api.dictionaryapi.dev/api/v2/entries/en/<word>)

Set-up
Create project directory and open it in VSCode
Run npm init -y to initiate npm
Install jest and esLint for unit testing and static analysis
Create index.html, style.css amd index.js files

Steps

Search form creation (index.html)

Using html, create a webpage structure titled 'Wordly'
Link css file in the head section
Using the form tag, create a form that allows user to type text input
Create a search button with the button tag
Create a section fro displaying the word searched, its definition, synonyms and pronunciation
Use audio tag to add audio
Link js file at the end of the body section

Styling (style.css)

With element, id and class identifiers, apply appropriate styles using css

Javascript
DOM manipulation - assign variables to html elements using document.getElementById
Use the preventDefault function to prevent page reload when the form is submitted
Create an asynchronous function called wordSearch
Within the function and in a try-catch block, fetch data from the api and convert it to json
Display the word, definition,synonyms and pronunciation using the .textContent property of DOM manipulation
Use catch to handle errors

Document and maintain
Commit your code/changes and push to github










