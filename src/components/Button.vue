<template>
  <button
    :class="[
      'shadow-md text-cyan-dark font-bold font-body',
      'py-4 px-8 md:py-2 md:px-4 rounded inline-flex items-center',
      'transition duration-200 focus:outline-none focus:shadow-outline',
      'hover:shadow-lg', typeClasses
    ]"
    :type="type"
    :value="value"
    @click="e => $emit('click', e)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "button",
    },
    value: {
      type: String,
      default: "",
    },
    secondary: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    typeClasses() {
      if (this.secondary) {
        return ["bg-white border-2 border-turquoise focus:border-cyan",
          "hover:bg-cyan-light hover:border-cyan"];
      }
      return "bg-turquoise focus:bg-cyan hover:bg-cyan";
    },
  },

};
</script>

<style>

</style>
