export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Pelle Öhrn, copywriter",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { keywords: "Öhrn, copywriter, Pelle Öhrn, copywriter Karlstad, Berghs, konsult, korrekturläsning, korrekturläsning Karlstad" },
      {
        property: "og:title",
        content: "Pelle Öhrn, copywriter",
        vmid: "og:title",
      },
      {
        property: "og:url",
        content: "https://www.pelleohrn.se/",
        vmid: "og:url",
      },
      {
        property: "og:image",
        content: "https://www.pelleohrn.se/images/pelle.jpg",
        vmid: "og:image",
      },
      {
        property: "og:description",
        content: "Jag gillar att vränga ord, hitta rätt ord och att sätta ihop ord till bra texter, tydlig information och säljande budskap.",
        vmid: "og:description",
      },
      {
        name: "description",
        content: "Jag gillar att vränga ord, hitta rätt ord och att sätta ihop ord till bra texter, tydlig information och säljande budskap.",
      },
      {
        property: "og:type",
        content: "website",
        vmid: "og:type",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700,800|Open+Sans&display=swap",
      },
    ],
  },

  // Plugins to run before rendering page
  plugins: [
    "~/plugins/fontAwesome.js",
  ],

  // Auto import components
  components: true,

  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/tailwindcss",
  ],

  modules: [
    "vue-scrollto/nuxt",
    "@nuxt/content",
  ],

};
