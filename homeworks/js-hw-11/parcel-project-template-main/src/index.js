import axios from 'axios';
import lightGallery from 'lightgallery';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const API_KEY = '50147129-6157c9390204a79bca0017f28';
const IMAGE_API_URL = 'https://pixabay.com/api/';

const form = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');
const button = document.querySelector('.load-more');

let page = 1;
let searchQuery = '';
let totalImages;
const IMAGES_PER_PAGE = 10;

// useEffect that listens state with `page` and state with input value
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    // Will be a state in App.jsx
    searchQuery = event.target.elements.searchQuery.value;
    clearGallery();
    const images = await searchImages(searchQuery, page);
    renderGallery(images);
});


// onClick handler with name handleLoadMore
button.addEventListener('click', async () => {
    if (checkHasNextPage()) {
        page += 1;
        const images = await searchImages(searchQuery, page);
        renderGallery(images);

    } else {
        Notify.failure('We\'re sorry, but you\'ve reached the end of search results.');
    }
});

// Should in useEffect that performs data fetch
// Important: async function should be declared in useEffect and called in useEffect
//  useEffect(() => {
//     function searchImages(q, page) {
//         // Your implementation
//     }
//
//     searchImages();
//  });

async function searchImages(q, page) {
    const params = {
        key: API_KEY,
        q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: IMAGES_PER_PAGE,
        page,
    };

    const response = await axios.get(IMAGE_API_URL, {
        params,
    });

    // Should be a separate state with count of total image
    totalImages = response.data.totalHits;

    // Should be saved in state with images
    return response.data.hits;
}

// Component ImageGallery
function renderGallery(images) {
    if (!images.length) {
        button.classList.add('hidden');
        // Render a separate component <Notification /> with this message if no images found
        Notify.failure('Sorry, there are no images matching your search query. Please try again.');
        return;
    }

    const cards = images.map((image) => {
        // Component ImageGalleryItem - one link with image and data
        return `<a href="${image.largeImageURL}"
        data-lg-size="${image.imageWidth}-${image.imageHeight}">
        <div class="photo-card" >
  <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
  <div  class="info">
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
</div>
</a>`;

    }).join();
    gallery.innerHTML += cards;
    // TODO: skip removal of button class and lightGallery
    button.classList.remove('hidden');
    lightGallery(gallery);

};

function clearGallery() {
    // Should reset state with images and page
    gallery.innerHTML = '';
    // Should be a separate state with page number
    page = 1;
    button.classList.add('hidden');
}

function checkHasNextPage() {
    return totalImages > (page + 1) * IMAGES_PER_PAGE;

}

