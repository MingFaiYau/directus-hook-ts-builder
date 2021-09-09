import { ExtensionContext } from 'directus/dist/types/extensions'

// https://docs.directus.io/guides/api-hooks/

type HookCronEvent = `cron(${string} ${string} ${string} ${string})`

type ScopeAF =
  | 'cli.init'
  | 'routes.init'
  | 'routes.custom.init'
  | 'middlewares.init'
type ActionAF = 'after' | 'before' | '*'
type HookAFEvent = `${ScopeAF}.${ActionAF}`

type ScopeServer = 'server'
type ActionServer = 'start' | 'stop' | '*'
type HookServerEvent = `${ScopeServer}.${ActionServer}`
type HookServerEventBefore = `${ScopeServer}.${ActionServer}.before`

type ScopeCRUD = 'items'
type ActionCRUD = 'create' | 'read' | 'update' | 'delete' | '*'
type HookCRUDEvent = `${ScopeCRUD}.${ActionCRUD}`
type HookCRUDEventBefore = `${ScopeCRUD}.${ActionCRUD}.before`

type ScopeCUD =
  | 'create'
  | 'collections'
  | 'fields'
  | 'folders'
  | 'permissions'
  | 'presets'
  | 'relations'
  | 'revisions'
  | 'roles'
  | 'settings'
  | 'users'
  | 'webhooks'
type ActionCUD = 'create' | 'update' | 'delete' | '*'
type HookCUDEvent = `${ScopeCUD}.${ActionCUD}`
type HookCUDEventBefore = `${ScopeCUD}.${ActionCUD}.before`

type HookInitEvent = `init`
type HookInitEventBefore = `init.before`

type HookRequestEvent = `request.not_found`
type HookFilesEvent = `files.upload`

type HookErrorEvent = `error`
type HookResponseEvent = `response`
type HookDBEvent = `database.error`

type ActionAuth = 'login' | 'logout' | 'refresh' | '*'
type HookAuthEvent = `auth.${ActionAuth}`
type HookAuthEventBefore = `auth.${ActionAuth}.before`

type ActionOAuth = 'login' | 'redirect' | '*'
type HookOAuthEvent = `oauth.${ActionOAuth}`
type HookOAuthEventBefore = `oauth.${ActionOAuth}.before`

interface ContextParameter {
  event: string
  accountability?: any
  collection?: any
  item?: any
  action?: any
  payload?: any
  schema?: any
  database?: any
}

type HookFunc = (parameter: ContextParameter) => void
type HookFuncBefore<T> = (input: T, parameter: ContextParameter) => T

type Hook = Partial<
  | Record<
      | HookCronEvent
      | HookAFEvent
      | HookServerEvent
      | HookCRUDEvent
      | HookCUDEvent
      | HookInitEvent
      | HookRequestEvent
      | HookErrorEvent
      | HookFilesEvent
      | HookResponseEvent
      | HookDBEvent
      | HookAuthEvent
      | HookOAuthEvent,
      HookFunc
    >
  | Record<
      | HookCRUDEventBefore
      | HookCUDEventBefore
      | HookServerEventBefore
      | HookInitEventBefore
      | HookAuthEventBefore
      | HookOAuthEventBefore,
      HookFuncBefore<any>
    >
>

module.exports = function registerHook(context: ExtensionContext) {
  const myHook: Hook = {
    'server.start': (parameter) => {
      const {} = parameter
    }
  }
  return myHook
}
