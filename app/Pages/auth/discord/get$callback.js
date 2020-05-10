const Env = use('Env');
const User = use('App/Models/User');

module.exports = {
  async handle({ ally, auth, response }) {
    const discord = await ally.driver('discord').getUser();
    const discordUser = discord.getOriginal();
    const discordValues = {
      discord_id: discordUser.id,
      discord_discriminator: discordUser.discriminator,
      name: discordUser.username,
      lang: discordUser.locale,
      avatar: `https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.png`
    };

    const user = await User.findOrCreate({
      discord_id: discordValues.discord_id
    }, discordValues);
    user.merge(discordValues);
    await user.save();

    const tokens = await auth.withRefreshToken().generate(user);
    response.redirect(`${Env.get('CLIENT_URL')}/login/done?${Object.keys(tokens).map(k => `${k}=${encodeURIComponent(tokens[k])}`).join('&')}`);
  }
};
