const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/framework/providers/ViewProvider',
  '@adonisjs/lucid/providers/LucidProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@adonisjs/auth/providers/AuthProvider',
  '@adonisjs/ally/providers/AllyProvider',
  '@adonisjs/validator/providers/ValidatorProvider'
]

const aceProviders = [
  '@adonisjs/lucid/providers/MigrationsProvider'
]

const aliases = {}
const commands = []

module.exports = { providers, aceProviders, aliases, commands }
