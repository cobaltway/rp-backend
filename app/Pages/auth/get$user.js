module.exports = {
  middlewares: ['auth'],
  async handle({ auth }) {
    if (auth.user.is_banned) throw new Error('USER_SUSPENDED');
    await auth.user.loadMany(['communities', 'owned_communities', 'tags']);
    return auth.user;
  }
};
