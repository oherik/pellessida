<template>
  <div class="main">
    <div class="bg-gradient-cyan-to-turquoise grid-lt py-24 items-center">
      <div class="flex flex-col gc-2">
        <h1 class="font-heading font-bold text-4xl lg:text-6xl text-darkcyan mb-8">
          Vill du ha professionell hjälp med texter?
        </h1>
        <p class="font-body text-base lg:text-lg text-darkcyan">
          Jag heter Pelle och jag gillar att vränga ord, hitta rätt ord och att sätta ihop ord
          till bra texter, tydlig information och säljande budskap.
        </p>
      </div>
      <img
        src="@/assets/images/typewriter.svg"
        class="pl-24 h-full gc-3"
        alt="typewriter"
      >
    </div>
    <div class="grid-lt items-center">
      <div class="flex flex-col gc-2 py-3">
        <h1 class="font-heading font-bold text-2xl lg:text-4xl text-darkcyan mb-8">
          Vem är jag?
        </h1>
        <p class="font-body text-base lg:text-lg text-darkcyan">
          Jag är utbildad copywriter på Berghs School of Communication och har arbetat 15 år som
          copywriter på en reklambyrå i Karlstad, kombinerat med mycket lång erfarenhet av
          kundkontakter och marknadsföring.
        </p>
      </div>
      <img
        src="@/assets/images/pelle.png"
        class="p-4 gc-3-e"
        alt="pelle"
      >
    </div>
    <div class="bg-pink grid-rt items-center py-24">
      <div class="gc-2 flex flex-col pr-48">
        <div class="flex">
          <img
            src="@/assets/images/presentation.svg"
            class="w-2/5 m-6 pl-6"
            alt="presentation"
          >
          <img
            src="@/assets/images/palm.svg"
            class="w-2/5 m-6 pt-8"
            alt="palm"
          >
        </div>
        <div class="flex">
          <img
            src="@/assets/images/press.svg"
            class="w-2/5 m-6 pb-10"
            alt="press"
          >
          <img
            src="@/assets/images/book.svg"
            class="w-2/5 m-6 pr-4"
            alt="book"
          >
        </div>
      </div>
      <div class="flex flex-col gc-3 py-3">
        <h1 class="font-heading font-bold text-2xl lg:text-4xl text-darkpurple mb-8">
          Vad kan jag skriva?
        </h1>
        <p class="font-body text-base lg:text-lg text-darkerpurple">
          Ja, egentligen allt! Jag är en lyhörd skribent, och jag lyssnar på dig, vad du vill ha och
          hjälper dig att uppnå ditt mål. Det kan handla om allt ifrån researtiklar,
          företagspresentationer och texter till webbplatser till annonser, pressreleaser och
          nyhetsbrev eller att korrekturläsa en bok. Jag har Öhrnkoll på ord helt enkelt!
        </p>
      </div>
    </div>
    <div class="border-b-4 border-darkcyan grid-lt py-24 items-start">
      <div class="flex flex-col gc-2  pr-24">
        <h1 class="font-heading font-bold text-2xl lg:text-4xl text-darkcyan mb-8">
          Hur når du mig?
        </h1>
        <p class="font-body text-base lg:text-lg text-darkcyan">
          I formuläret här bredvid kan du skriva ett meddelande till mig, så hör
          jag av mig inom kort. Du kan också skicka ett mail eller slå en signal.
          <br>Pelle Öhrn
          <br><span id="js-contact-phone" />
          <br><span id="js-contact-email" />
        </p>
      </div>

      <form
        id="js-contact-form"
        class="w-full max-w-lg gc-3 flex flex-col items-center"
        :action="`//formspree.io/${mail}`"
        method="POST"
      >
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block tracking-wide font-body text-darkcyan text-sm font-bold mb-2"
              for="name"
            >
              Namn
            </label>
            <input
              id="name"
              :class="['font-body appearance-none block w-full text-darkcyan border-2',
                       'border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none',
                       'focus:border-turquoise trans']"
              type="text"
              placeholder="Namn Namnsson"
              required
            >
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block tracking-wide font-body text-darkcyan text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              id="email"
              :class="['font-body appearance-none block w-full text-darkcyan border-2',
                       'border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none',
                       'focus:border-turquoise trans']"
              type="email"
              placeholder="exempel@email.se"
              required
            >
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6 w-full">
          <div class="w-full">
            <label
              class="block tracking-wide font-body text-darkcyan text-sm font-bold mb-2"
              for="message"
            >
              Meddelande
            </label>
            <textarea
              id="message"
              :class="['font-body appearance-none block w-full text-darkcyan border-2',
                       'border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none',
                       'focus:border-turquoise trans']"
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
          style="display:none"
        >
        <input
          class="hidden"
          type="hidden"
          name="_subject"
          value="Message via http://pelleohrn.se"
        >
        <button
          :class="['bg-turquoise hover:bg-cyan text-darkcyan font-bold font-body',
                   'py-2 px-4 rounded inline-flex items-center trans']"
          type="submit"
          value="Send"
        >
          <font-awesome-icon
            icon="paper-plane"
            class="mr-2"
          />
          <span>Skicka</span>
        </button>
      </form>
    </div>
    <div
      class="bg-gray-100 flex flex-col items-center"
      :style="{ backgroundImage: 'url(' + require('@/assets/patterns/cubes.png') + ')' }"
    >
      <div class="w-48 relative mt-2 h-40">
        <div
          :class="['w-12 h-12 border-2 border-solid border-gray-500 absolute',
                   'z-0 top-4 left-34 rotate-45 m-auto left-0 right-0']"
        />
        <div class="shadow-lg absolute w-full mt-6 border-8 border-solid bg-white border-frame">
          <img
            src="@/assets/images/painting-by-copywriter.png"
            class="p-3 h-full shadow-md"
            alt="painting-by-copywriter"
          >
        </div>
      </div>
      <p
        :class="['font-body text-sm md:text-base text-gray-600 italic w-2/5',
                 'max-w-5xl m-auto text-center pt-16']"
      >
        Idag är jag med i BolagsBolaget som tar hand om sociala avgifter,
        skatt med mera. Mycket enkelt för dig som anlitar mig, eftersom du
        inte behöver tänka på de bitarna. Efter att vi har kommit överens
        om lön och tidsperiod skriver BolagsBolaget att avtal med dig,
        och fakturerar sen månadsvis eller ett engångsbelopp.
      </p>
      <p
        :class="['font-body text-sm md:text-base text-gray-600 italic w-2/5',
                 'max-w-5xl m-auto text-center py-10']"
      >
        Ikoner CC-BY av The Noun Project: David (palm), Ladalle CS (press), monkik (bok)
        och Mark Medina (presentation).
      </p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      msg: 'Välkommen till Pelles sida',
      email: `${'skri'}${'v@'}pelleohrn.se`,
      phone: `${'076-833'}${' 64'} 41`,
    };
  },
  mounted() {
    const contactForm = document.getElementById('js-contact-form');
    contactForm.setAttribute('action', this.email);
    document.getElementById('js-contact-phone').innerHTML = this.email;
    document.getElementById('js-contact-email').innerHTML = this.phone;
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700,800|Open+Sans|Gochi+Hand&display=swap');

.bg-gradient-cyan-to-turquoise {
  background: linear-gradient(285deg, #A4E9D7, #73CFD4);
}

.trans {
    transition: all .2s;
}

.grid-lt {
  display: grid;
  grid-template-columns: 10% 3fr 2fr 10%;
}

.grid-rt {
  display: grid;
  grid-template-columns: 10% 2fr 3fr 10%;
}

.gc-2 {
  grid-column: 2;
}

.gc-3 {
  grid-column: 3;
}

.gc-3-e {
  grid-column: 3/end;
}

.border-frame{
  border-top-color: #b89675;
  border-right-color:  #7b654f;
  border-bottom-color: #7b654f;
  border-left-color:  #a67c52;
}

.rotate-45{
  transform: rotate(45deg);
}
</style>
