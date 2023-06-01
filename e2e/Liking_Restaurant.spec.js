/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#movies');
  I.see('Daftar favorite masih kosong', '#movies');
});

Scenario('liking one restaurants', async ({ I }) => {
  I.wait(3);
  I.see('Daftar favorite masih kosong', '#movies');

  I.amOnPage('/');
  I.waitForElement('.restaurant__judul a', 10);
  I.seeElement('.restaurant__judul a');

  const firstRestaurant = locate('.restaurant__judul a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.wait(3);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(3);

  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('.restaurant__judul');
  const likedRestaurantName = await I.grabTextFrom('.restaurant__judul a');

  // membandingkan apakah sama atau tidak
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
