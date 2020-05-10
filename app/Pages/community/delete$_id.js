const Community = use('App/Models/Community');

module.exports = {
  middleware: ['auth'],
  params: {
    id: ['integer', 'to_int']
  },
  async handle({ auth: { user }, params: { id } }) {
    let queryBuilder = Community.queryBuilder()
      .where('id', id);
    if (user.role !== 'admin') {
      queryBuilder = queryBuilder.whereHas('owners', (builder) => {
        builder.where('id', user.id);
      });
    }
    const community = await queryBuilder.firstOrFail();

    await community.delete();
  }
};
