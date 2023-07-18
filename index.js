let get = document.getElementById("getquote");
let quoteText = document.getElementById("Quote-text");

function getQuote() {
  fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let randomNumber = Math.floor(Math.random() * data.length);
      let randomQuote = data[randomNumber].text;
      quoteText.innerHTML = randomQuote;
    })
    .catch(function(error) {
      console.log("Error fetching quotes:", error);
    });
}

get.addEventListener("click", function() {
  getQuote();
});