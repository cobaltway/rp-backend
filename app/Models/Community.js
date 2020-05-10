const Resource = use('App/Models/Mixins/Resource');

class Community extends Resource() {
  tags() {
    return this.belongsToMany('App/Models/Tag').pivotTable('community_tag');
  }
  users() {
    return this.belongsToMany('App/Models/User').pivotTable('community_user');
  }
  owners() {
    return this.belongsToMany('App/Models/User').pivotTable('community_owner');
  }
}

module.exports = Community;
