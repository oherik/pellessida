<template>
  <form
    id="js-contact-form"
    class="w-full flex flex-col items-center mt-8 lg:mt-0"
    method="POST"
  >
    <div class="flex flex-wrap -mx-3 mb-6 w-full">
      <div class="w-full md:w-1/2 mb-6 md:mb-0 md:pr-2 lg:pr-3">
        <label
          class="block tracking-wide font-body text-cyan-dark font-bold mb-2"
          for="name"
        >
          Namn
        </label>
        <input
          id="name"
          name="name"
          :class="[
            'font-body appearance-none block w-full text-cyan-dark border-2',
            'border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none',
            'focus:border-turquoise transition duration-200',
          ]"
          type="text"
          placeholder="Namn Namnsson"
          required
        />
      </div>
      <div class="w-full md:w-1/2 md:pl-2 lg:pl-3">
        <label
          class="block tracking-wide font-body text-cyan-dark font-bold mb-2"
          for="email"
        >
          Email
        </label>
        <input
          id="email"
          name="_replyto"
          :class="[
            'font-body appearance-none block w-full text-cyan-dark border-2',
            'border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none',
            'focus:border-turquoise transition duration-200',
          ]"
          type="email"
          placeholder="exempel@email.se"
          required
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-12 md:mb-6 w-full">
      <div class="w-full">
        <label
          class="block tracking-wide font-body text-cyan-dark  font-bold mb-2"
          for="message"
        >
          Meddelande
        </label>
        <textarea
          id="message"
          name="message"
          :class="[
            'font-body appearance-none block w-full text-cyan-dark border-2',
            'border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none',
            'focus:border-turquoise transition h-40 lg:h-auto duration-200',
          ]"
          type="password"
          placeholder="Hej! Ses över en kopp kaffe?"
          required
        />
      </div>
    </div>
    <input
      class="hidden"
      type="text"
      name="_gotcha"
      style="display: none"
    />
    <input
      class="hidden"
      type="hidden"
      name="_subject"
      value="Message via http://pelleohrn.se"
    />

    <Button
      type="submit"
      value="Send"
    >
      <font-awesome-icon
        icon="paper-plane"
        class="mr-4 md:mr-2 md:text-base text-lg "
      />
      <span class=" md:text-base text-lg">Skicka</span>
    </Button>
  </form>
</template>

<script>
import Button from "./Button.vue";

export default {
  components: { Button },
  data() {
    return {
      email: `${"skri"}${"v@"}pelleohrn.se`,
    };
  },
  mounted() {
    /* Delayed to hide email in prerendering */
    setTimeout(() => {
      const contactForm = document.getElementById("js-contact-form");
      contactForm.setAttribute("action", `//formspree.io/${this.email}`);
    }, 1000);
  },
};
</script>
