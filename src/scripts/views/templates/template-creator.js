import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <h2 class="movie__title">${resto.name}</h2>
  <img class="movie__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" crossorigin="anonymous"/>
  <div class="movie__info">
    <h3>Information</h3>
    <h4>Alamat</h4>
    <p>${resto.address}</p>
    <h4>Kota</h4>
    <p>${resto.city}</p>
  </div>
  <div class="movie__overview">
    <h3>Deskripsi</h3>
    <p>${resto.description}</p>
  </div>
  <div class="resto__menu">
    <div class="judul__menu"><h3>Menu</h3></div>
    <div class="isi__makanan">
      <h4>Food Menu</h4>
      <ul>
        ${resto.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
      </ul>
    </div>
    <div class="isi__minuman">
      <h4>Drink Menu</h4>
      <ul>
        ${resto.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
      </ul>
    </div>
  </div>
  <div class="customer__reviews">
    <h3>Customer Reviews</h3>
    <div class="review__box">
      ${resto.customerReviews.map((review) => `
        <div class="review__item">
          <div class="review__name">${review.name}</div>
          <div class="review__content">${review.review}</div>
          <div class="review__date">${review.date}</div>
        </div>
      `).join('')}
    </div>
  </div>
`;

const createRestoItemTemplate = (resto) => `
  <div class="list-item">
    <div class="movie-item__header">
      <img class="movie-item__header__poster lazyload" alt="${resto.name}" crossorigin="anonymous"
           data-src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${resto.rating}</span></p>
      </div>
    </div>
    <div class="movie-item__content">
      <div class="restaurant__judul">
        <h3><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
        <h4>${resto.city}</h4>
      </div>
      <p>${resto.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
