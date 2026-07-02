import { expect } from '@playwright/test';

export default class searchProductActions {
    constructor(page) {
        this.page = page;

        this.buttonExplore = this.page.getByTestId('tabbar-explore');
        this.searchBar = this.page.locator('.ExploreSaham_bit-explore-button__XEn5W');
        this.searchInputProduct = this.page.locator('.custom-input-search');

    }

    async goto() {
        await this.page.goto('https://app.bibit.id/');
    }

    async openExplore() {
        await this.page.goto('https://app.bibit.id/');

        await this.buttonExplore.click();
    }

    async ClickAndInputSearchBar() {
        await this.page.goto('https://app.bibit.id/');

        await this.buttonExplore.click();

        await this.searchBar.click();
        await this.searchInputProduct.fill('BBCA');

    }

}