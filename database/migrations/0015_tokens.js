const Schema = use('Schema');

class TokenSchema extends Schema {
  async up() {
    await this.create('tokens', (table) => {
      table.increments();

      table.integer('user_id')
        .unsigned().references('id').inTable('users')
        .onDelete('CASCADE');
      table.string('token', 40).notNullable().unique();
      table.string('type', 80).notNullable();
      table.boolean('is_revoked').defaultTo(false);

      table.timestamps();
    });
  }

  down() {
    this.raw('DROP TABLE IF EXISTS tokens CASCADE');
  }
}

module.exports = TokenSchema;
