import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/restodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
      <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestoDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('#movie');
    restoContainer.innerHTML = createRestoDetailTemplate(restaurant);

    // Sembunyikan bagian #heroContent
    const heroContent = document.querySelector('#heroContent');
    if (heroContent) {
      heroContent.style.display = 'none';
    }

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        city: restaurant.city,
        address: restaurant.address,
      },
    });
  },
};

export default Detail;
