<template>
  <div>
    <!-- Modal background -->
    <transition
      key="3"
      name="fade"
      mode="out-in"
    >
      <div
        v-if="value"
        class="fixed z-10 inset-0 transition-opacity flex justify-center"
      >
        <div
          class="absolute inset-0 opacity-0"
          @click="$emit('input', false)"
        ></div>
        <div
          class="pointer-events-none absolute inset-0 bg-gray-900 opacity-75 "
        ></div>
        <div
          :class="[
            'inline-block align-bottom bg-white rounded-lg  text-black',
            'shadow-xl transform transition-all my-8 mx-4 overflow-auto',
            'max-w-2xl w-full z-20 fixed inset-y-0 relative',
          ]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div class="mx-auto w-full max-w-xl px-4">
            <div class="my-4 md:mb-8 md:mt-10 mx-2 flex">
              <div class="w-1/5" />
              <h2 class="text-center font-heading my-0 font-bold text-2xl w-3/5">
                {{ title }}
              </h2>
              <div
                class="w-1/5 items-center flex justify-end"
              >
                <button
                  :class="[
                    'focus:outline-none transition w-8 h-8',
                    'focus:shadow-outline',
                    'duration-200 hover:text-cyan focus:text-cyan'
                  ]"
                  type="button"
                  @click="$emit('input', false)"
                >
                  <font-awesome-icon
                    class="text-grey-700 text-3xl cursor-pointer"
                    icon="times"
                  />
                </button>
              </div>
            </div>
            <div class="mb-12">
              <!-- The text is passed as a prop so we can edit the <p>-tag CSS here -->
              <p
                v-for="paragraph in text"
                :key="paragraph.slice(0,10)"
                class="text-body font-body mb-4"
              >
                {{ paragraph }}
              </p>
            </div>
            <div class="flex flex-col items-end md:flex-row md:items-center justify-end mb-8">
              <Button
                class="mb-8 mr-0 md:mb-0 md:mr-8 "
                secondary
                @click="$emit('input', false)"
              >
                Stäng
              </Button>
              <Button @click="contactMe">
                Kontakta mig
              </Button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Modal panel -->
  </div>
</template>

<script>
import Button from "../Button.vue";

export default {
  components: { Button },
  props: {
    title: {
      type: String,
      default: "",
    },
    text: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Boolean,
      default: false,
    },
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
