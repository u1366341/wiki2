document.getElementById('myForm').addEventListener('submit', saveMovie);

function saveMovie(e){
    var movieName =document.getElementById('movieName').value;
    var comment =document.getElementById('comment').value;
    
    var movie = {
        name: movieName,
        comment: comment
    }
    
    
    
    
    /*localStorage.setItem('test', 'hello world');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));*/
    
    if(localStorage.getItem('movies') === null){
        var movies = [];
        movies.push(movie);
        localStorage.setItem('movies', JSON.stringify(movies));
    } else{
        var movies = JSON.parse(localStorage.getItem('movies'));
        movies.push(movie);
        localStorage.setItem('movies', JSON.stringify(movies));
    }
    
    fetchMovies();
    
    e.preventDefault();
}

function deleteMovie(comment){
    var movies = JSON.parse(localStorage.getItem('movies'));
    for(var i =0;i < movies.length;i++){
        if(movies[i].comment == comment){
            movies.splice(i, 1);
        }
    }
    localStorage.setItem('movies', JSON.stringify(movies));
    
    fetchMovies();
}

function fetchMovies(){
    var movies = JSON.parse(localStorage.getItem('movies'));
    
    var moviesResults = document.getElementById('moviesResults');
    
    moviesResults.innerHTML = '';
    for(var i = 0; i < movies.length; i++){
        var name = movies[i].name;
        var comment = movies[i].comment;
        
        moviesResults.innerHTML += '<div class="well">'+
                                    '<h3>'+name+
                                    '<a onclick="deleteMovie(\''+comment+'\')" class="btn btn-danger" href="#">Delete</a>'+
                                    '</h3>'+
                                    '</div>';
    }
}