<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <p class="mb-2">
      Hallå eller! Den här sidan är väldigt mycket under konstruktion.
    </p>
    <p>Inputfältet nedan går till en temporär mail. Testa att skicka ett meddelande om du vill!</p>


    <form
      class="w-full max-w-lg"
      :action="`//formspree.io/${mail}`"
      method="POST"
    >
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="name"
          >
            Namn
          </label>
          <input
            id="name"
            :class="['appearance-none block w-full bg-gray-200 text-gray-700 border',
                     'border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none',
                     'focus:bg-white']"
            type="text"
            placeholder="Namn Namnsson"
            required
          >
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            id="email"
            :class="['appearance-none block w-full bg-gray-200 text-gray-700 border',
                     'border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none',
                     'focus:bg-white focus:border-gray-500']"
            type="email"
            placeholder="exempel@email.se"
            required
          >
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="message"
          >
            Meddelande
          </label>
          <textarea
            id="message"
            :class="['appearance-none block w-full bg-gray-200 text-gray-700 border',
                     'border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none',
                     'focus:bg-white focus:border-gray-500']"
            type="password"
            placeholder="Här kan du skriva ditt meddelande"
            required
          />
        </div>
      </div>
      <input
        class="hidden"
        type="text"
        name="_gotcha"
        style="display:none"
      >
      <input
        class="hidden"
        type="hidden"
        name="_subject"
        value="Message via http://domain.com"
      >
      <button
        :class="['bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold',
                 'py-2 px-4 rounded inline-flex items-center']"
        type="submit"
        value="Send"
      >
        <font-awesome-icon icon="paper-plane" />
        <span>Skicka</span>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Välkommen till Pelles sida',
      mail: `${'hutrojumlo'}${'@'}desoz.com`,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-weight: normal;
  padding-top: 20px;
  padding-bottom: 30px;
}
p {
  color: #969696;
  margin-bottom: 0;
  font-size: 1.25rem;
}
</style>
