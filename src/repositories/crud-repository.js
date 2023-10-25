const { Logger } = require("../config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    return await this.model.create(data);
  }

  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (err) {
      Logger.error("something went wrong while delete", err);
      throw err;
    }
  }

  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (err) {
      Logger.error("something went wrong while getByPk", err);
      throw err;
    }
  }
  async update(id, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
    } catch (err) {
      Logger.error("something went wrong while getByPk", err);
      throw err;
    }
  }

  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (err) {
      Logger.error("Something went wrong ", err);
      throw err;
    }
  }
}

module.exports = CrudRepository;
