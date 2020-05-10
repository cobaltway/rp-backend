const Env = use('Env');

module.exports = {
  ally: {
    facebook: {},
    discord: {
      clientId: Env.get('DISCORD_CLIENT_ID'),
      clientSecret: Env.get('DISCORD_CLIENT_SECRET'),
      redirectUri: `${Env.get('APP_URL')}/auth/discord/callback`
    }
  }
};
