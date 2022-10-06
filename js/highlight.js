const urlGeneral = 'https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969?language=pt-BR';
const urlVideo = 'https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969/videos?language=pt-BR';

const highlight = document.querySelector('.highlight');
const highlightVideoLink = document.querySelector('.highlight__video-link');
const highlightVideo = document.querySelector('.highlight__video');
const highlightInfo = document.querySelector('.highlight__info');
const highlightTitle = document.querySelector('.highlight__title');
const highlightRating = document.querySelector('.highlight__rating');
const highlightGenres = document.querySelector('.highlight__genres');
const highlightLaunch = document.querySelector('.highlight__launch');
const highlightDescription = document.querySelector('.highlight__description');

const getHighlight = async () => {
    const responseHighlight = await fetch(urlGeneral);
    const highlightBody = await responseHighlight.json();

    createHighlight(highlightBody);
}

let videoKey = [];

const getKey = async () => {
    const responseHighlightVideo = await fetch(urlVideo);
    const videoBody = await responseHighlightVideo.json();

    videoKey = videoBody.results[0].key;
}

const createHighlight = (item) => {
    const genres = item.genres;
    const genreList = [];

    genres.forEach(genre => genreList.push(genre.name));

    highlightVideo.style.backgroundImage = `url(${item.backdrop_path})`;
    highlightVideoLink.href = `https://www.youtube.com/watch?v=${videoKey}`;
    highlightTitle.textContent = item.title;
    highlightRating.textContent = (item.vote_average).toFixed(1);
    highlightGenres.textContent = genreList.join(', ');
    highlightLaunch.textContent = item.release_date;
    highlightDescription.textContent = item.overview;
}

const initHighlight = async () => {
    await getKey();
    await getHighlight();
}

initHighlight();










