const Schema = use('Schema');

class CommunityUserSchema extends Schema {
  up() {
    this.create('community_user', (table) => {
      table.increments();
      table.integer('user_id').references('users.id').onDelete('CASCADE');
      table.integer('community_id').references('communities.id').onDelete('CASCADE');
    });
  }

  down() {
    this.drop('community_user');
  }
}

module.exports = CommunityUserSchema;
