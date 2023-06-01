/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.see('Daftar favorite masih kosong', '#movies');

  I.amOnPage('/');
  I.waitForElement('.restaurant__judul a');
  I.seeElement('.restaurant__judul a');

  const firstRestaurant = locate('.restaurant__judul a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#movies');
  const likedRestaurantName = await I.grabTextFrom('.restaurant__judul a');

  // membandingkan apakah sama atau tidak
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click('.restaurant__judul a');

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Daftar favorite masih kosong', '#movies');
});
