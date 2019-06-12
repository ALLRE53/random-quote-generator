/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
/* Defined Array of quote objects*/

let  quotes = [
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

//console.log(quotes);

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Use the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
 
  let randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomQuoteIndex];
  return randomQuote;

}
 

  //console.log(getRandomQuote(quotes));


  /***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
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

       stringdefault += '<h3>' + quoteObjrandom.tags +'</h3>';
   } else {
     stringdefault += '';


       } 
   stringdefault += "</p>"; 
   //print(message)
console.log(stringdefault);
document.getElementById("quote-box").innerHTML = stringdefault;

let r = Math.floor(Math.random() *200);
let g = Math.floor(Math.random() *200);
let b = Math.floor(Math.random() *200);
let randomRGB = 'rgb('+ r + ', ' + g + ', ' + b + ')';
document.body.style.backgroundColor = randomRGB;

}
   printQuote();
   

    
/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

