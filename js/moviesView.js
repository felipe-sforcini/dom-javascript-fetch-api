const divMovies = document.querySelector('.movies');

let movies = [];
let moviesSearch = [];

const getMovies = async () => {
    const response = await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false');
    const data = await response.json();
    movies = data.results;
    moviesSearch = movies;
}

const buildElements = (item) => {
    const movie = document.createElement('div');
    movie.classList.add('movie');

    movie.style.backgroundImage = `url(${item.poster_path})`;

    const movieInfo = document.createElement('div');
    movieInfo.classList.add('movie__info');

    const movieTitle = document.createElement('span');
    movieTitle.classList.add('movie__title');
    movieTitle.textContent = item.title;

    const movieRating = document.createElement('span');
    movieRating.classList.add('movie__rating');

    const star = document.createElement('img');
    star.src = '../assets/estrela.svg';

    movieRating.append(star, item.vote_average);
    movieInfo.append(movieTitle, movieRating);
    movie.append(movieInfo);
    divMovies.append(movie);

    movie.addEventListener('click', () => {
        openModal(item.id);
    })
}

const makeCardMovies = (start, end) => {
    divMovies.innerHTML = '';

    const tempMovies = moviesSearch.slice(start, end);
    tempMovies.forEach(item => {
        buildElements(item);
    });
}

const init = async () => {
    await getMovies();
    makeCardMovies(0, 5);
}

init();