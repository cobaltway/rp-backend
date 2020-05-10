module.exports = {
  query: {
    refresh_token: ['required', 'trim']
  },
  async handle({ query, auth }) {
    if (auth.user && auth.user.is_banned) throw new Error('USER_SUSPENDED');
    return auth.generateForRefreshToken(query.refresh_token);
  }
};
