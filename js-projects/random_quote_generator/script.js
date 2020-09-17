const quotes = [
  {
    quote: "I don't always test my code, but when I do, I do in production",
    author: "Chuck Norris",
  },
  {
    quote: "How many functions does it take to change the world?",
    author: "mrjaypeasmith",
  },
  { quote: "You're an array of sunshine", author: "mrjaypeasmith" },
  { quote: "It was love at first byte", author: "mrjaypeasmith" },
  { quote: "I function better at night", author: "mrjaypeasmith" },
  { quote: "Don't tell anyone, but I really hate IE6", author: "Anon" },
  {
    quote: "I don't use debuggers, I stare down until until the code confesses",
    author: "Chuck Norris",
  },
  {
    quote: "When my code fails to compile, the compiler apologizes",
    author: "Chuck Norris",
  },
  {
    quote:
      "In order to understand recursion, one must first understand recursion",
    author: "Anonymous",
  },
  {
    quote: "Before software can be reusable it first has to be usable",
    author: "Ralph Johnson",
  },
  {
    quote:
      "Programming is like sex. One mistake and you have to support it for the rest of your life",
    author: "Michael Sinz",
  },
];

// Chuck Norris API - https://api.chucknorris.io/

(function () {
  const quote = document.querySelector(".quotePlaceholder");
  const author = document.querySelector(".quote span");
  const newQuote = document.querySelector("#newQuote");
  const tweetQuote = document.querySelector("#tweetQuote");

  newQuote.addEventListener("click", function () {
    const selected = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[selected].quote;
    author.textContent = quotes[selected].author;
  });

  tweetQuote.addEventListener("click", function () {
    const generatedQuote = quote.textContent;
    const url =
      "https://twitter.com/intent/tweet?text=" +
      encodeURI(generatedQuote) +
      " - Funny Quote Generator by @ruphaganesh";
    window.open(url);
  });
})();
