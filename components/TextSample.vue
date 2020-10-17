<template>
  <div>
    <button
      type="button"
      :class="[
        'relative rounded text-purple-dark overflow-hidden flex flex-col',
        'items-center justify-center shadow-md bg-white',
        'cursor-pointer hover:shadow-xl transition focus:border-purple-dark',
        'duration-200 transform hover:-translate-y-1 hover:scale-105',
        'w-48 m-4',
        'focus:outline-none focus:shadow-outline'
      ]"
      @click="showModal = true"
    >
      <span />
      <div class="leading-4 text-6xl px-12 h-24 box-content flex items-center">
        <slot name="icon" />
      </div>

      <div
        class="w-full bg-white p-4 flex-2 "
      >
        <p class="text-xl text-purple-dark font-heading text-center">
          {{ title }}
        </p>
      </div>
    </button>
    <Modal
      v-model="showModal"
      :title="title"
      :text="text"
    />
  </div>
</template>

<script>
import Modal from "./TextModal";

export default {
  components: { Modal },
  props: {
    title: {
      type: String,
      default: "",
    },
    text: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showModal: false,
    };
  },

  methods: {
    contactMe() {
      this.$emit("input", false);
      /**
       * It's a bit strange to use the id hard coded like this,
       * but I feel it's petter than prop drilling/emitting in
       * this case.
       */
      this.$scrollTo("#contact-me-heading");
    },
  },
};
</script>
