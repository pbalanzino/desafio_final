import ContainerFile from "../../ContainerFiles.js";

class ProductsDaoFile extends ContainerFile {
  constructor(fileName) {
    super("DB/products.json");
  }
  async desconect() {
    await this.close();
  }
}

export default ProductsDaoFile;
