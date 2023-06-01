import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Explore Restaurant</h2>
        <div id="movies" class="movies"></div>
      </div>
    `;
  },

  async afterRender() {
    // Menampilkan kembali #heroContent
    const heroContent = document.querySelector('#heroContent');
    if (heroContent) {
      heroContent.style.display = 'grid';
    }

    const movies = await FavoriteRestaurantIdb.getAllRestaurant();
    const moviesContainer = document.querySelector('#movies');

    if (movies.length === 0) {
      moviesContainer.innerHTML = `
        <h3 class="not-favorite">Daftar favorite masih kosong</h3>
      `;
    } else {
      movies.forEach((movie) => {
        moviesContainer.innerHTML += createRestoItemTemplate(movie);
      });
    }
  },
};

export default Favorite;
