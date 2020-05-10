const Schema = use('Schema');

class TagSchema extends Schema {
  async up() {
    await this.create('tags', (table) => {
      table.increments();

      table.string('slug');
      table.string('name');

      table.string('image_small');
      table.string('image_big');

      table.timestamps();
    });
  }

  down() {
    this.raw('DROP TABLE IF EXISTS tags CASCADE');
  }
}

module.exports = TagSchema;
