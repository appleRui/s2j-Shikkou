const {
  NOTION_DB,
  NOTION_TOKEN,
  GOOGLE_FORM,
  API_URL
} = process.env;

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "東京電機大学 二部執行委員会",
    htmlAttrs: {
      lang: "ja",
    },
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "",
      },
      {
        name: "format-detection",
        content: "telephone=no",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "https://www.dendai.ac.jp/common/images/global/favicon.ico",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/variables", "@/assets/scss/common"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/notionClient"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://github.com/janniks/vue-notion
    "vue-notion/nuxt",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // DOC:https://github.com/motdotla/dotenv
    "@nuxtjs/dotenv",
    // DOC:https://www.npmjs.com/package/@nuxtjs/fontawesome
    "nuxt-fontawesome",
    // DOC:https://content.nuxtjs.org/
    "@nuxt/content",
  ],

  // DOC:https://axios.nuxtjs.org/setup
  axios: {
    proxy: true,
    prefix: "/api/",
  },
  
  // DOC:https://github.com/nuxt-community/proxy-module#readme
  proxy: {
    "/api/": {
      target: "https://api.notion.com",
      pathRewrite: {
        "^/api/": "",
      },
    },
  },

  // DOC:https://bootstrap-vue.org/docs
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
  },

  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["fas"],
      },
    ],
  },

  // DOC:https://nuxtjs.org/ja/docs/directory-structure/nuxt-config#runtimeconfig
  publicRuntimeConfig: {
    NOTION_DB: process.env.NODE_ENV !== "production" ? NOTION_DB : undefined,
    NOTION_TOKEN:
      process.env.NODE_ENV !== "production" ? NOTION_TOKEN : undefined,
  },
  privateRuntimeConfig: {
    NOTION_TOKEN: NOTION_TOKEN,
    NOTION_DB: NOTION_DB,
    GOOGLE_FORM: GOOGLE_FORM,
    API_URL: API_URL,
  },

  generate: {
    routes: ["/", "/news"],
  },

  build: {
    babel: {
      compact: true,
    },
  },
};
