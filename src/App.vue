<template>
  <Main />
</template>

<script>
import Main from "./views/Main.vue";

export default {
  name: "App",
  metaInfo: {
    title: "Pelle Öhrn, copywriter",
    meta: [
      { keywords: "Öhrn, copywriter, Pelle Öhrn, copywriter Karlstad, Berghs, konsult, korrekturläsning, korrekturläsning Karlstad" },
      { charset: "utf-8" },
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
  },
  components: {
    Main,
  },
};
</script>
