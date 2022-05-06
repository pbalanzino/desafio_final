import { promises as fs } from "fs";

class ContainerFiles {
  constructor(path) {
    this.path = path;
  }
  async list(id) {
    try {
      const list = await this.listAll();
      const search = list.find((obj) => obj.id === id);
      return search;
    } catch (error) {
      throw error;
    }
  }

  async listAll() {
    try {
      const data = await fs.readFile(this.path, "utf8");
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }
}
