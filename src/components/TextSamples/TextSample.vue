<template>
  <div
    :class="[
      'relative rounded text-darkpurple overflow-hidden flex',
      'items-center justify-center shadow-md bg-white',
      'cursor-pointer hover:shadow-lg transition focus:border-darkpurple'
    ]"
  >
    <span />
    <div class="leading-4 text-6xl px-12 py-6 box-content text-purple">
      <slot name="icon"></slot>
    </div>

    <div
      class="absolute bottom-0 left-0 w-full h-50 bg-white bg-opacity-85 p-2"
    >
      <p class="text-lg font-heading font-bold text-center text-darkerpurple">
        {{ title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },

};
</script>

<style scoped>
.transition {
  transition: all 0.2s;
}
</style>
