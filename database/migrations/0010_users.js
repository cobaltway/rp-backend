const Schema = use('Schema');

class UserSchema extends Schema {
  async up() {
    await this.create('users', (table) => {
      table.increments();

      table.string('discord_id');
      table.string('discord_discriminator');
      table.string('discord_token');

      table.string('slug');
      table.string('name');
      table.string('avatar');
      table.string('email');

      table.boolean('is_admin').default(false);
      table.boolean('is_banned').default(false);

      table.string('lang').defaultTo('fr');

      table.timestamp('last_online');

      table.timestamps();
    });
  }

  down() {
    this.raw('DROP TABLE IF EXISTS users CASCADE');
  }
}

module.exports = UserSchema;
