const Schema = use('Schema');

class CommunityTagSchema extends Schema {
  up() {
    this.create('community_tag', (table) => {
      table.increments();
      table.integer('tag_id').references('tags.id').onDelete('CASCADE');
      table.integer('community_id').references('communities.id').onDelete('CASCADE');
    });
  }

  down() {
    this.drop('community_tag');
  }
}

module.exports = CommunityTagSchema;
