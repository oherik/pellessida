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
        <!-- Close modal on background click -->
        <div
          class="absolute inset-0 opacity-0"
          @click="$emit('input', false)"
        />
        <div
          class="pointer-events-none absolute inset-0 bg-gray-900 opacity-75 "
        />
        <!-- The modal itself -->
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
            <div class="my-4 lg:mb-8 lg:mt-10 mx-2 flex">
              <div class="w-1/5" />
              <h2 class="text-center font-heading my-0 font-bold text-2xl w-3/5">
                {{ text.title }}
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

              <nuxt-content :document="text" />
            </div>
            <div class="flex flex-col items-end lg:flex-row lg:items-center justify-end mb-8">
              <Button
                class="mb-8 mr-0 lg:mb-0 lg:mr-8 "
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
import Vue from "vue";
import Button from "./Button";

export default Vue.extend({
  components: { Button },
  props: {
    text: {
      type: Object,
      default: () => undefined,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },

  mounted() {
    // Close on escape
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 27) {
        this.$emit("input", false);
      }
    });
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
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/deep/ .nuxt-content p {
  @apply text-left text-black font-body mb-4;
}

</style>
