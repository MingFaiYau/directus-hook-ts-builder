import { ExtensionContext } from 'directus/dist/types/extensions'

module.exports = function registerHook(context: ExtensionContext) {
  const myHook: Hook = {
    'server.start': (parameter) => {
      const {} = parameter
    }
  }
  return myHook
}
