const Community = use('App/Models/Community');

module.exports = {
  middleware: ['auth'],
  params: {
    id: ['integer', 'to_int']
  },
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
    owners: ['', 'comma_array'],
    image_small: ['string'],
    image_big: ['string']
  },
  async handle({ auth: { user }, params: { id }, query }) {
    let queryBuilder = Community.query()
      .where('id', id);
    if (user.role !== 'admin') {
      queryBuilder = queryBuilder.whereHas('owners', (builder) => {
        builder.where('id', user.id);
      });
    }
    const community = await queryBuilder.firstOrFail();

    community.merge(query);
    await community.save();
    await community.owners().sync(query.owners);
    await community.tags().sync(query.tags);

    return community.slug;
  }
};
