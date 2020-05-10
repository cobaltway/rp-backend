const Resource = use('App/Models/Mixins/Resource');

class User extends Resource() {
  tokens() {
    return this.hasMany('App/Models/Token');
  }
  tags() {
    return this.belongsToMany('App/Models/Tag').pivotTable('user_tag');
  }
  communities() {
    return this.belongsToMany('App/Models/Community').pivotTable('community_user');
  }
  owned_communities() {
    return this.belongsToMany('App/Models/Community').pivotTable('community_owner');
  }
}

module.exports = User;
