
/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Defined an Array named (quotes) of 5 quote objects all containing a 'quote'
  and `source` property.  A 'citation` and 'year' property was added
  to at least one object in the array. Console.log() used to log array of quotes to the console.
***/

let quotes = [
  {
    quote: 'In prayer it is better to have a heart without words than words without a heart.',
    source: 'John Bunyan',
    citation: 'publication',
    year: '1673',

  },

  {
    quote: 'The only really happy people are those who have learned how to serve.',
    source: 'Rick Warren',
    citation: 'Publication',
    year: '2000',
    tags: "Religious"
  },

  {
    quote: 'Complain and remain. Praise and be raised',
    source: 'Joyce Meyer'

  },

  {
    quote: 'Watch your thoughts, they become words. Watch your words, they become actions. Watch your actions, \
   they become habits. Watch your habits, they become your character. Watch your character, it becomes your destiny.',
    source: 'Anonymous'

  },

  {
    quote: 'When you harbor bitterness, happiness will dock elsewhere',
    source: 'Unknown'

  },

];

/***
  Defined the `getRandomQuote` function to randomly select a quote within quotes array.
  ramdom integer (between 0 and 1) rounded down to whole number as quotes array is indexed
  by Zero(whole number). Variable ranmdomQuote stores random array index number and returns 
  random quote from `quotes` array.
***/

function getRandomQuote() {

  let randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomQuoteIndex];
  return randomQuote;
}

/***
   Defined `printQuote` function that calls the `getRandomQuote` function stored in quoteObjrandom.
 - Defined stringdefault to hold the HTML string while setting it equal to an empty string.  
   Will later concatenate the default string once if statement conditions are true during the loop
  -Used the random quote variable to build the HtML string and added the quote and source properties
   to the string. 
 - if statement checked for the citation and year properteries in each quote object before adding 
   it to the HTML string.
 - Closed the final p tag once the entire HTML string was assembled with quote properties
 - Set the `innerHTML` of the `quote-box` div tag to the HTML String Let "stringdefault" to replace 
  the id value in HTML.
***/


function printQuote() {

  let quoteObjrandom = getRandomQuote();
  let stringdefault = '';

  stringdefault += '<p class = "quote">' + quoteObjrandom.quote + '</p>';
  stringdefault += '<p class = "source" >' + quoteObjrandom.source;

  if (quoteObjrandom.citation) {
    stringdefault += '<span class = "citation">' + quoteObjrandom.citation + '</span>';

  }

  if (quoteObjrandom.year) {
    stringdefault += '<span class = "year">' + quoteObjrandom.year + '</span>';
  }


  if (quoteObjrandom.tags) {

    stringdefault += '<h3>' + quoteObjrandom.tags + '</h3>';
  } else {
    stringdefault += '';


  }

  stringdefault += "</p>";
  
  console.log(stringdefault);
  document.getElementById("quote-box").innerHTML = stringdefault;
  randomRGB();

}

/*** Extra-Credit  *** Created a random function using the Math libraries 
     random (returns a random floating deicmal) method and floor (rounds down a float to 
     ) methods.  The returned value is than multiplied by 256 (max number of colors
     viewable on a screen) to generate it's unique one of three
     colors from the primary colors and stored in a variable.  The lettered color
     variables are concatenated in a string and stored in the variable randomRGB which is also a 
     function.  The randomRGB (New Color) variable is stored in the documents backgroundcolor 
     property to return the new background color.  ***/   
 

function randomRGB() {

  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let randomRGB = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  document.body.style.backgroundColor = randomRGB;

}
/***Extra-Credit *** auto_refresh function automatically refreshes the web page every 20 seconds. 
    Initialized let variable fresh to store timing method and
    passed argument function for auto page refresh and the printQuote function was
    invoked from within function to automatically and randomly print/refresh the quotes
    to the webpage. ***/

 function auto_refresh () {

 let fresh; 
 fresh = window.setInterval(function(){printQuote()}, 2000);
 console.log(fresh);

 }

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. 
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

printQuote();
