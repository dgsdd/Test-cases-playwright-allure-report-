class FeaturePage {
  constructor(page) {
        this.page = page;
        this.featureLabel = page.locator('body h2');
  }
  async featureLabelIsVisible() {
    await this.featureLabel.isVisible();
  }

}
  module.exports = { FeaturePage };