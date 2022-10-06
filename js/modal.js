const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal__title');
const modalImg = document.querySelector('.modal__img');
const modalDescription = document.querySelector('.modal__description');
const modalAverage = document.querySelector('.modal__average');
const modalClose = document.querySelector('.modal__close');
const modalGenres = document.querySelector('.modal__genres');

const openModal = async (id) => {
    const responseModal = await fetch(`https://tmdb-proxy.cubos-academy.workers.dev/3/movie/${id}?language=pt-BR`);

    const bodyModal = await responseModal.json();

    createModal(bodyModal);

    modal.classList.remove('hidden');
}

const createModal = (body) => {
    modalTitle.textContent = body.title;
    modalImg.src = body.backdrop_path;
    modalDescription.textContent = body.overview;
    modalAverage.textContent = (body.vote_average).toFixed(1);

    modalGenres.textContent = '';

    body.genres.forEach((genre) => {
        const modalGenre = document.createElement('span');
        modalGenre.textContent = genre.name;
        modalGenre.classList.add('modal__genre');

        modalGenres.appendChild(modalGenre);
    })
}

modal.addEventListener('click', () => {
    modal.classList.add('hidden');
})




