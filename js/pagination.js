const pagePrev = document.querySelector('.btn-prev');
const pageNext = document.querySelector('.btn-next');

let start = 0;
let end = 5;

pagePrev.addEventListener('click', () => {
    start -= 5;
    end -= 5;

    if (start < 0) {
        start = moviesSearch.length - 5;
        end = moviesSearch.length;
    }

    makeCardMovies(start, end);
});

pageNext.addEventListener('click', () => {
    start += 5;
    end += 5;

    if (end > moviesSearch.length) {
        start = 0;
        end = 5;
    }

    makeCardMovies(start, end);
});

