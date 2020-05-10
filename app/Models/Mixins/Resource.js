const Model = use('Model');

module.exports = function () {
  class Resource extends Model {
    static async paginate(query, page = 1, pageSize = 5) {
      const result = (await query.paginate(page, pageSize)).toJSON();
      result.lastPage = Number(result.lastPage);
      result.page = Number(result.page);
      result.perPage = Number(result.perPage);
      result.total = Number(result.total);
      return result;
    }

    static formatDates(field, value) {
      return new Date(value).toISOString();
    }
    static castDates(field, value) {
      return value.toISOString();
    }
  }

  return Resource;
};
