const language = 'language=pt-BR';
const API_KEY = 'api_key=c4f2fd599e3279479c3bcccf704d6b47';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const IMG_URL = 'https://image.tmdb.org/t/p/w500/'

function apresentaFilme() {
    const infoFilme = document.querySelector(".info-filme")
    const id = Math.floor(Math.random() * 1000) + 1

    const url = `${BASE_URL}${id}?${API_KEY}&${language}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.status_code == 34) {
               apresentaFilme()
            } else {
                infoFilme.innerHTML = 
                `
                <img class="filme-img" src="${IMG_URL + data.poster_path}" alt="">
                <div class="text-film">
                    <h3>${data.title}</h3>
                    <p>${overView(data.overview)}</p>
                </div>
                `
            }
        })
}

function overView(overview) {
    if (overview == "") {
        return 'A sinopse do filme está indisponível.'
    } else {
        return overview
    }
}