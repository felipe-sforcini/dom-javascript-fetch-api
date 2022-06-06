const search = document.querySelector('.input');

const searchMovie = async (event) => {
    let value = event.target.value;

    if (event.key !== 'Enter' || value === '') {
        return init();
    }

    const firstLetterQueryValue = search.value[0].toUpperCase();
    const restOfQueryValue = (search.value).slice(1).toLowerCase();
    const queryValue = firstLetterQueryValue + restOfQueryValue;

    const url = `https://tmdb-proxy.cubos-academy.workers.dev/3/search/movie?language=pt-BR&include_adult=false**&query=${queryValue}`

    moviesSearch = [];

    let response = await fetch(url);
    let dataSearch = await response.json();

    dataSearch.results.forEach(item => {
        moviesSearch.push(item);
    });

    makeCardMovies(0, 5);

    search.value = '';
}

search.addEventListener('keydown', searchMovie);
