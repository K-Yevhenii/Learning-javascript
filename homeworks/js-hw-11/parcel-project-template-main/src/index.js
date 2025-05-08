import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const API_KEY = '50147129-6157c9390204a79bca0017f28';
const IMAGE_API_URL = 'https://pixabay.com/api/';
const form = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');
const button = document.querySelector('.load-more');
let page = 1;
let searchQuery = '';

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    searchQuery = event.target.elements.searchQuery.value;
    clearGallery();
    const images = await searchImages(searchQuery, page);
    renderGallery(images);
});
button.addEventListener('click', async () => {
    page += 1;
    const images = await searchImages(searchQuery, page);
    renderGallery(images);
});
async function searchImages(q, page) {
    const params = {
        key: API_KEY,
        q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 40,
        page,
    };

    const response = await axios.get(IMAGE_API_URL, {
        params,
    });
    console.log(response);
    return response.data.hits;

}
function renderGallery(images) {
    if (!images.length) {
        button.classList.add('hidden');
        Notify.failure('Sorry, there are no images matching your search query. Please try again.');
        return;
    }
    const cards = images.map((image) => {
        return `<div class="photo-card">
  <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>${image.likes} Likes</b>
    </p>
    <p class="info-item">
      <b>${image.views} Views</b>
    </p>
    <p class="info-item">
      <b>${image.comments} Comments</b>
    </p>
    <p class="info-item">
      <b>${image.downloads} Downloads</b>
    </p>
  </div>
</div>`;
    }).join();
    gallery.innerHTML += cards;
    button.classList.remove('hidden');
};

function clearGallery() {
    gallery.innerHTML = '';
    page = 1;
}

