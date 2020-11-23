import OrphanagesImages from "../entities/OrphanagesImages";

export default {
  render(image: OrphanagesImages) {
    return {
      id: image.id,
      url: `http://192.168.0.30:3333/tmp/${image.path}`,
    };
  },

  renderMany(images: OrphanagesImages[]) {
    return images.map((image) => this.render(image));
  },
};
