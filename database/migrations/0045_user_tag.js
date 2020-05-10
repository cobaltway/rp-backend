const Schema = use('Schema');

class UserTagSchema extends Schema {
  up() {
    this.create('user_tag', (table) => {
      table.increments();
      table.integer('tag_id').references('tags.id').onDelete('CASCADE');
      table.integer('user_id').references('users.id').onDelete('CASCADE');
    });
  }

  down() {
    this.drop('user_tag');
  }
}

module.exports = UserTagSchema;
