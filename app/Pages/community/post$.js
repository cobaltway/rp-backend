const Community = use('App/Models/Community');

module.exports = {
  middleware: ['auth'],
  query: {
    slug: ['string', 'slug'],
    name: ['string'],
    description: ['string'],
    status: ['in:ACTIVE,WIP,CLOSED'],
    type: ['in:FORUM,DISCORD,FACEBOOK,OTHER'],
    url: ['string'],
    discord: ['string'],
    opened_at: ['date', 'to_iso_string'],
    tags: ['', 'comma_array'],
    image_small: ['string'],
    image_big: ['string']
  },
  async handle({ auth: { user }, query }) {
    const community = await Community.create(query);
    await community.owners().sync([user.id]);
    await community.tags().sync(query.tags);
    return community.id;
  }
};
