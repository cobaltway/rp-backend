const Community = use('App/Models/Community');
const Tag = use('App/Models/Tag');

module.exports = {
  async handle() {
    const featured = await Community.query()
      .withCount('users')
      .where('status', 'ACTIVE')
      .whereNotNull('image_big')
      .orderBy('users_count', 'desc')
      .limit(10)
      .fetch();

    const latest = await Community.query()
      .where('status', 'ACTIVE')
      .orderBy('created_at', 'desc')
      .limit(10)
      .fetch();

    const tags = await Tag.query()
      .withCount('communities', (builder) => {
        builder.where('status', 'ACTIVE');
      })
      .whereIn('slug', [])
      .fetch();

    return {
      featured,
      latest,
      tags
    };
  }
};
