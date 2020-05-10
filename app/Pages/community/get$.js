const Community = use('App/Models/Community');

module.exports = {
  query: {
    name: ['string'],
    status: ['in:ACTIVE,WIP,CLOSED'],
    type: ['in:FORUM,DISCORD,FACEBOOK,OTHER'],
    opened_before: ['date', 'toISO'],
    opened_after: ['date', 'toISO'],
    tags: ['', 'comma_array'],
    page: ['integer', 'to_int'],
    page_size: ['integer|max:20', 'to_int'],
    order_by: ['string'],
    order_direction: ['in:asc,desc']
  },
  handle({ query: { page = 0, page_size = 10, order_by = 'opened_at', order_direction = 'desc', ...search } }) {
    let queryBuilder = Community.query();

    if (search.name) {
      queryBuilder = queryBuilder.where((builder) => {
        builder
          .whereRaw('levenshtein_less_equal(name, ?, 3) <= 3', [search.name])
          .orWhere('name', 'ILIKE', `%${search.name}%`);
      });
    }
    if (search.status) queryBuilder = queryBuilder.where('status', search.status);
    if (search.type) queryBuilder = queryBuilder.where('type', search.type);
    if (search.opened_before) queryBuilder = queryBuilder.where('opened_at', '<=', search.opened_before);
    if (search.opened_after) queryBuilder = queryBuilder.where('opened_at', '>=', search.opened_after);
    if (search.tags) queryBuilder = queryBuilder.whereHas('tags', builder => builder.whereIn('slug', search.tags));

    return queryBuilder
      .with('tags')
      .orderBy(order_by, order_direction)
      .paginate(page, page_size);
  }
};
