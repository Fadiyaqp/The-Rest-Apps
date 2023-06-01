import TheRestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Explore Restaurant</h2>
        <div id="movies" class="movies">
        </div>
      </div>
        `;
  },

  async afterRender() {
    // Menampilkan kembali #heroContent
    const heroContent = document.querySelector('#heroContent');
    if (heroContent) {
      heroContent.style.display = 'grid';
    }

    const restos = await TheRestoDbSource.HomeResto();
    const restosContainer = document.querySelector('#movies');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
