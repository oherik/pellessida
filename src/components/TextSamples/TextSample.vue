<template>
  <div>
    <div
      :class="[
        'relative rounded text-purple-dark overflow-hidden flex',
        'items-center justify-center shadow-md bg-white',
        'cursor-pointer hover:shadow-lg transition focus:border-purple-dark',
        'duration-200'
      ]"
      @click="showModal = true"
    >
      <span />
      <div class="leading-4 text-6xl px-12 py-6 box-content text-purple">
        <slot name="icon"></slot>
      </div>

      <div
        class="absolute bottom-0 left-0 w-full h-50 bg-white bg-opacity-85 p-2"
      >
        <p class="text-lg font-heading font-bold text-center text-purple-dark">
          {{ title }}
        </p>
      </div>
    </div>
    <Modal
      v-model="showModal"
      :title="title"
      :text="text"
      @clickContact="contactMe"
    >
    </Modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue";

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
      showModal: true,
    };
  },
  methods: {
    contactMe() {
      this.showModal = false;
    },
  },
};
</script>
