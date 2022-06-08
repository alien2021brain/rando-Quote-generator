let apiQuotes = [];
const quote_container = document.getElementById("quote-container");
const quote_author = document.getElementById("author");
const quotetext = document.getElementById("quote");
const twitter_btn = document.getElementById("twitter");
const new_quotebtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

//  show loading
function loading() {
  loader.hidden = false;
  quote_container.hidden = true;
}
//  hide loading
function complete() {
  quote_container.hidden = false;
  loader.hidden = true;
}

// // show new code
// function newQuote() {
//   // loading
//   loading();
//   // picking a random quote from api quote array
//   const quote = localQuote[Math.floor(Math.random() * localQuote.length)];
//   // check if author field is blank
//   if (!quote.author) {
//     quote_author.textContent = "unknown";
//   } else {
//     quote_author.textContent = quote.author;
//   }
//   if (quote.text.length > 100) {
//     quotetext.classList.add("long-quote");
//   } else {
//     quotetext.classList.remove("long-quote");
//   }
//   // set quote
//   complete();

//   quotetext.textContent = quote.text;
// }

// using template link api
function newQuote() {
  // loading
  loading();
  // picking a random quote from api quote array
  // Math.random will choose value b/w 0 and 1
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // check if author field is blank
  if (!quote.author) {
    quote_author.textContent = "unknown";
  } else {
    quote_author.textContent = quote.author;
  }
  if (quote.text.length > 100) {
    quotetext.classList.add("long-quote");
  } else {
    quotetext.classList.remove("long-quote");
  }
  complete();
  // set quote

  quotetext.textContent = quote.text;
}

// get quotes from api
async function getQuotes() {
  loading();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // catch error here
  }
}

// tweet code  using template string
function twwetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quotetext.textContent} - ${quote_author.textContent}`;
  window.open(twitterUrl, "_blank");
}
// eventlister tweet
new_quotebtn.addEventListener("click", newQuote);
twitter_btn.addEventListener("click", twwetQuote);

// calling functions
getQuotes();
// newQuote();
// loading();
