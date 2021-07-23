class Product {
  url = '';
  title = '';
  description = '';
  price = 0;
  oldPrice = '';
  images = [];
  brand = '';
  category = '';
  colors = [];
  sizes = [];
  variants = [];

  constructor({
    url, title, description, price, oldPrice, brand, category,
    images = [], colors = [], sizes = [], variants = [],
  }) {
    if (!url) {
      throw new Error('Product must have valid URL!');
    }
    this.url = url;
    if (title) this.title = title;
    if (description) this.description = description;
    if (price && price > 0) this.price = price;
    if (oldPrice) this.oldPrice = oldPrice;
    if (brand) this.brand = brand;
    if (category) this.category = category;
    if (images.length) this.images = images;
    if (colors.length) this.colors = colors;
    if (sizes.length) this.sizes = sizes;
    if (variants.length) this.variants = variants;
  }

  toObject() {
    return {
      url: this.url,
      title: this.title,
      description: this.description,
      price: this.price,
      oldPrice: this.oldPrice,
      images: this.images,
      brand: this.brand,
      category: this.category,
      colors: this.colors,
      sizes: this.sizes,
      variants: this.variants,
    };
  }
}