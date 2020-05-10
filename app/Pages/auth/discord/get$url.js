module.exports = {
  async handle({ ally }) {
    return ally.driver('discord').scope(['identify']).getRedirectUrl();
  }
};
