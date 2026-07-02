const { test, expect } = require('@playwright/test');
const { default: actions } = require('./actions/searchProductActions');

test('Open web Bibit', async ({ page }) => {
  const object = new actions(page);

  await object.goto();
});

test('Open web Explore', async ({ page }) => {
  const object = new actions(page);

  await object.goto();
  await object.openExplore();
});

test('Click and input product in search bar', async ({ page }) => {
  const object = new actions(page);

  await object.goto();
  await object.openExplore();
  await object.ClickAndInputSearchBar();
});