import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@nuxt/fonts`
     */
    ["fonts"]: typeof import("@nuxt/fonts").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `vuetify-nuxt-module`
     */
    ["vuetify"]: typeof import("vuetify-nuxt-module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/eslint`
     */
    ["eslint"]: typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-auth-utils`
     */
    ["auth"]: typeof import("nuxt-auth-utils").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxt/fonts`
     */
    ["fonts"]?: typeof import("@nuxt/fonts").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `vuetify-nuxt-module`
     */
    ["vuetify"]?: typeof import("vuetify-nuxt-module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/eslint`
     */
    ["eslint"]?: typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-auth-utils`
     */
    ["auth"]?: typeof import("nuxt-auth-utils").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/fonts", Exclude<NuxtConfig["fonts"], boolean>] | ["vuetify-nuxt-module", Exclude<NuxtConfig["vuetify"], boolean>] | ["@nuxt/eslint", Exclude<NuxtConfig["eslint"], boolean>] | ["nuxt-auth-utils", Exclude<NuxtConfig["auth"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@nuxt/fonts`
     * @see https://www.npmjs.com/package/@nuxt/fonts
     */
    ["fonts"]: typeof import("@nuxt/fonts").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `vuetify-nuxt-module`
     * @see https://www.npmjs.com/package/vuetify-nuxt-module
     */
    ["vuetify"]: typeof import("vuetify-nuxt-module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/eslint`
     * @see https://www.npmjs.com/package/@nuxt/eslint
     */
    ["eslint"]: typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-auth-utils`
     * @see https://www.npmjs.com/package/nuxt-auth-utils
     */
    ["auth"]: typeof import("nuxt-auth-utils").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxt/fonts`
     * @see https://www.npmjs.com/package/@nuxt/fonts
     */
    ["fonts"]?: typeof import("@nuxt/fonts").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `vuetify-nuxt-module`
     * @see https://www.npmjs.com/package/vuetify-nuxt-module
     */
    ["vuetify"]?: typeof import("vuetify-nuxt-module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/eslint`
     * @see https://www.npmjs.com/package/@nuxt/eslint
     */
    ["eslint"]?: typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-auth-utils`
     * @see https://www.npmjs.com/package/nuxt-auth-utils
     */
    ["auth"]?: typeof import("nuxt-auth-utils").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/fonts", Exclude<NuxtConfig["fonts"], boolean>] | ["vuetify-nuxt-module", Exclude<NuxtConfig["vuetify"], boolean>] | ["@nuxt/eslint", Exclude<NuxtConfig["eslint"], boolean>] | ["nuxt-auth-utils", Exclude<NuxtConfig["auth"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   githubToken: string,

   session: {
      name: string,

      password: string,

      cookie: {
         sameSite: string,
      },

      maxAge: number,
   },

   oauth: {
      github: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      gitlab: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      spotify: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      google: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      twitch: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      auth0: {
         clientId: string,

         clientSecret: string,

         domain: string,

         audience: string,

         redirectURL: string,
      },

      workos: {
         clientId: string,

         clientSecret: string,

         connectionId: string,

         screenHint: string,

         redirectURL: string,
      },

      microsoft: {
         clientId: string,

         clientSecret: string,

         tenant: string,

         scope: Array<any>,

         authorizationURL: string,

         tokenURL: string,

         userURL: string,

         redirectURL: string,
      },

      discord: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      battledotnet: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      keycloak: {
         clientId: string,

         clientSecret: string,

         serverUrl: string,

         serverUrlInternal: string,

         realm: string,

         redirectURL: string,
      },

      linear: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      linkedin: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      cognito: {
         clientId: string,

         clientSecret: string,

         region: string,

         userPoolId: string,

         redirectURL: string,
      },

      facebook: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      instagram: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      paypal: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      steam: {
         apiKey: string,

         redirectURL: string,
      },

      x: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      xsuaa: {
         clientId: string,

         clientSecret: string,

         domain: string,

         redirectURL: string,
      },

      vk: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      yandex: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      tiktok: {
         clientKey: string,

         clientSecret: string,

         redirectURL: string,
      },

      dropbox: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      polar: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      zitadel: {
         clientId: string,

         clientSecret: string,

         domain: string,

         redirectURL: string,
      },

      authentik: {
         clientId: string,

         clientSecret: string,

         domain: string,

         redirectURL: string,
      },

      seznam: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      strava: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },

      hubspot: {
         clientId: string,

         clientSecret: string,

         redirectURL: string,
      },
   },

   nitro: {
      envPrefix: string,
   },

   hash: {
      scrypt: any,
   },

   webauthn: {
      register: any,

      authenticate: any,
   },
  }
  interface PublicRuntimeConfig {
   isDataMocked: boolean,

   scope: string,

   githubOrg: string,

   githubEnt: string,

   githubTeam: string,

   usingGithubAuth: boolean,

   version: string,

   isPublicApp: boolean,
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }