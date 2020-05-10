const Schema = use('Schema');

class CommunitySchema extends Schema {
  async up() {
    await this.create('communities', (table) => {
      table.increments();

      table.string('slug');
      table.string('name');
      table.text('description');
      table.date('opened_at');

      table.enum('type', ['DISCORD', 'FACEBOOK', 'FORUM', 'OTHER']).default('FORUM');
      table.enum('status', ['ACTIVE', 'WIP', 'CLOSED']).default('ACTIVE');

      table.string('url');
      table.string('discord');

      table.string('image_small');
      table.string('image_big');

      table.timestamps();
    });
  }

  down() {
    this.raw('DROP TABLE IF EXISTS communities CASCADE');
  }
}

module.exports = CommunitySchema;
