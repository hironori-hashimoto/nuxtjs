const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'spa',
  head: {
    title: 'nuxtjs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/nuxtjs/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=M+PLUS+1p'
      }
    ]
  },
  router: {
    base: '/nuxtjs/'
  },
  plugins: [
    { src: "@/plugins/element-ui", ssr: false },
    { src: "@/plugins/filters.js", ssr: false }
  ],
  css: ["element-ui/lib/theme-chalk/index.css"],
  /*
   ** Build configuration
   */
  build: {
    vendor: ["axios", "element-ui", "dayjs"],
    /*
     ** Run ESLint on save
     */
    publicPath: '/nuxtjs/_nuxt/',
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
      config.module.rules = config.module.rules.map(rule => {
        if (rule.loader === "babel-loader") {
          rule.exclude = /node_modules/;
        }
        return rule;
      });
    }
  }

};
