const Resource = use('App/Models/Mixins/Resource');

class Tag extends Resource() {
  communities() {
    return this.belongsToMany('App/Models/Community').pivotTable('community_tag');
  }
  users() {
    return this.belongsToMany('App/Models/User').pivotTable('user_tag');
  }
}

module.exports = Tag;
