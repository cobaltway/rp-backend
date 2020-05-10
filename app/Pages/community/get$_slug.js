const Community = use('App/Models/Community');

module.exports = {
  params: {
    slug: ['string', 'slug']
  },
  handle({ params: { slug } }) {
    return Community.query()
      .where('slug', slug)
      .with('tags')
      .firstOrFail();
  }
};
