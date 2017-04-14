var pageCounter = 1;
var movieContainer = document.getElementById("movie-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://raw.githubusercontent.com/u1366341/json/master/movie-' + pageCounter +'.json');
ourRequest.onload = function() {
  var ourData = JSON.parse(ourRequest.responseText);
  renderHTML(ourData);
};
ourRequest.send();
pageCounter++;
if (pageCounter > 3){
    btn.classList.add("hide-me");
}
});

function renderHTML(data) {
    var htmlString = "";
    
    for (i = 0; i < data.length; i++){
        htmlString += "<p><b>Movie Name: </b>" + data[i].name + " - <b>Genre: </b>" + data[i].genre + ".</p>";
    }
    
    movieContainer.insertAdjacentHTML('beforeend', htmlString);
}

