<template>
  <div>
    <h1 v-if="document.title">
      document.title
    </h1>
    <div v-if="document.body">
      <p
        v-for="paragraph in document.body"
        :key="paragraph.slice(0, 20)"
        class="text-body font-body mb-4"
      >
        {{ paragraph }}
      </p>
    </div>
    {{ document.title }}
  </div>
</template>

<script>

export default {
  props: {
    document: {
      type: Object,
      default: () => undefined,
    },
  },
};
</script>
