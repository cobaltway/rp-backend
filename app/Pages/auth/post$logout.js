module.exports = {
  middlewares: ['auth'],
  async handle({ auth }) {
    const token = auth.getAuthHeader();
    return auth.user.tokens().where('token', token).update({ is_revoked: true });
  }
};
