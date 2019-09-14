<template>
  <div class="main">
    <div class="hero bg-gradient-cyan-to-turquoise grid-rows-auto py-12 lg:py-24 items-center">
      <h1 class="hero__header font-heading font-bold text-4xl lg:text-6xl text-darkcyan mb-8">
        Vill du ha professionell hjälp med texter?
      </h1>
      <p class="hero__paragraph font-body text-base lg:text-lg text-darkcyan pr-6 lg:pr-0">
        Jag heter Pelle och jag gillar att vränga ord, hitta rätt ord och att sätta ihop ord
        till bra texter, tydlig information och säljande budskap.
      </p>
      <img
        src="@/assets/images/typewriter.svg"
        class="hero__image lg:pl-24 h-full"
        alt="typewriter"
      >
    </div>
    <div class="who items-center">
      <div class="flex flex-col who__text pt-12 pb-4 lg:py-24">
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
        :src="isMobile ? require('@/assets/images/pelle.jpg')
          : require('@/assets/images/pelle-slanted.png')"
        class="p-3 lg:p-4 self-center who__image"
        alt="pelle"
      >
    </div>
    <div class="bg-gradient-lightpurple-to-pink what items-center py-12 lg:py-24">
      <div class="what__image pt-6 lg:pr-24 lg:pt-0">
        <img
          src="@/assets/images/presentation.svg"
          class="w-24"
          alt="presentation"
        >
        <img
          src="@/assets/images/palm.svg"
          class="w-24"
          alt="palm"
        >

        <img
          src="@/assets/images/press.svg"
          class="w-24"
          alt="press"
        >
        <img
          src="@/assets/images/book.svg"
          class="w-24"
          alt="book"
        >
      </div>
      <h1 class="what__header font-heading font-bold text-2xl lg:text-4xl text-darkpurple mb-8">
        Vad kan jag skriva?
      </h1>
      <p class="what__paragraph font-body text-base lg:text-lg text-darkerpurple">
        Ja, egentligen allt! Jag är en lyhörd skribent, och jag lyssnar på dig, vad du vill ha och
        hjälper dig att uppnå ditt mål. Det kan handla om allt ifrån researtiklar,
        företagspresentationer och texter till webbplatser till annonser, pressreleaser och
        nyhetsbrev eller att korrekturläsa en bok. Jag har Öhrnkoll på ord helt enkelt!
      </p>
    </div>

    <div class="contact border-b-4 border-darkcyan py-12 lg:py-24 items-start">
      <div class="contact__text flex flex-col md:pr-12 lg:pr-24">
        <h1 class="font-heading font-bold text-2xl lg:text-4xl text-darkcyan mb-8">
          Hur når du mig?
        </h1>
        <p class="font-body text-base lg:text-lg text-darkcyan">
          I formuläret här {{ isMobile ? 'nedanför' : 'bredvid' }}
          kan du skriva ett meddelande till mig, så hör jag av mig
          inom kort. Du kan också skicka ett mail eller slå en signal.
          <br>Pelle Öhrn
          <br><span id="js-contact-phone" />
          <br><span id="js-contact-email" />
        </p>
      </div>

      <form
        id="js-contact-form"
        class="contact__form w-full flex flex-col items-center mt-8 lg:mt-0"
        method="POST"
      >
        <div class="flex flex-wrap -mx-3 mb-6 w-full">
          <div class="w-full md:w-1/2 mb-6 md:mb-0 md:pr-2 lg:pr-3">
            <label
              class="block tracking-wide font-body text-darkcyan text-sm font-bold mb-2"
              for="name"
            >
              Namn
            </label>
            <input
              id="name"
              name="name"
              :class="['font-body appearance-none block w-full text-darkcyan border-2',
                       'border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none',
                       'focus:border-turquoise transition']"
              type="text"
              placeholder="Namn Namnsson"
              required
            >
          </div>
          <div class="w-full md:w-1/2 md:pl-2 lg:pl-3">
            <label
              class="block tracking-wide font-body text-darkcyan text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              id="email"
              name="_replyto"
              :class="['font-body appearance-none block w-full text-darkcyan border-2',
                       'border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none',
                       'focus:border-turquoise transition']"
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
              name="message"
              :class="['font-body appearance-none block w-full text-darkcyan border-2',
                       'border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none',
                       'focus:border-turquoise transition h-40 lg:h-auto']"
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
          :class="['bg-turquoise shadow-md hover:bg-cyan text-darkcyan font-bold font-body',
                   'py-2 px-4 rounded inline-flex items-center transition']"
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
          :class="['w-12 h-12 border-2 border-solid border-gray-600 absolute',
                   'z-0 top-4 left-34 rotate-45 m-auto left-0 right-0']"
        />
        <div
          :class="['shadow-lg absolute w-full mt-6 border-8 border-solid',
                   'bg-white border-frame h-full']"
        >
          <img
            src="@/assets/images/painting-by-copywriter.png"
            class="p-3 h-full shadow-md"
            alt="painting-by-copywriter"
          >
        </div>
      </div>
      <p
        :class="['font-body text-sm md:text-base text-gray-600 italic w-4/5 lg:w-2/5',
                 'max-w-5xl m-auto text-center pt-16']"
      >
        Idag är jag med i BolagsBolaget som tar hand om sociala avgifter,
        skatt med mera. Mycket enkelt för dig som anlitar mig, eftersom du
        inte behöver tänka på de bitarna. Efter att vi har kommit överens
        om lön och tidsperiod skriver BolagsBolaget att avtal med dig,
        och fakturerar sen månadsvis eller ett engångsbelopp.
      </p>
      <p
        :class="['font-body text-sm md:text-base text-gray-600 italic w-4/5 lg:w-2/5',
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
      windowWidth: window.innerWidth,
      mediumBreakpoint: '1024',
    };
  },
  computed: {
    isMobile() {
      return this.windowWidth < this.mediumBreakpoint;
    },
  },
  mounted() {
    const contactForm = document.getElementById('js-contact-form');
    contactForm.setAttribute('action', `//formspree.io/${this.email}`);
    document.getElementById('js-contact-phone').innerHTML = this.email;
    document.getElementById('js-contact-email').innerHTML = this.phone;
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700,800|Open+Sans&display=swap');

.bg-gradient-cyan-to-turquoise {
  background: linear-gradient(285deg, #A4E9D7, #73CFD4);
}

.bg-gradient-lightpurple-to-pink{
  background: #FDE9FF;
  background: linear-gradient(137deg, #FDE9FF 0%, #ffe0f8 100%);
}

.transition {
    transition: all .2s;
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

/* BEM for some grid stuff */
.hero {
  display: grid;
  grid-template-columns: 10% 3fr 2fr 10%;
  grid-auto-rows: auto;
}
.hero__header {
  grid-row: 1;
  grid-column: 2/4;
}
.hero__image {
  grid-row: 2;
  grid-column: 3;
}
.hero__paragraph {
  grid-row: 2;
  grid-column: 2;
}
.who {
  display: grid;
  grid-template-columns: 10% auto 10%;
}
.who__text {
  grid-column: 2;
}
.who__image {
  grid-column: 1/end;
}
.what {
  display: grid;
  grid-template-columns: 10% auto 10%;
  grid-template-rows: repeat(3,auto);
}
.what__header {
  grid-row: 1;
  grid-column: 2;
}
.what__paragraph {
  grid-row: 2;
  grid-column: 2;
}
.what__image {
  grid-row: 3;
  grid-column: 2;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 2rem;
}
.contact {
  display: grid;
  grid-template-columns: 10% auto 10%;
}
.contact__text {
  grid-column: 2;
}
.contact__form {
  grid-column: 2;
  grid-row: 2;
}
@media (min-width: 1024px) {
  .hero__header {
    grid-column: 2;
  }
  .hero__image {
    grid-row: 1/3;
  }
  .who {
    grid-template-columns: 10% 3fr 2fr 10%;
  }
  .who__text {
    grid-column: 2;
  }
  .who__image {
    grid-column: 3/end;
  }
  .what {
    grid-template-columns: 10% auto auto 10%
  }
  .what__header {
    align-self: flex-end !important;
    grid-column: 3;
  }
  .what__image {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: max-content auto;
    grid-row: 1/3;
    grid-column: 2;
    grid-gap: 3rem;
  }
  .what__paragraph {
    grid-column: 3;
    align-self: flex-start;
  }
  .contact {
    grid-template-columns: 10% 3fr 2fr 10%;
  }
  .contact__text {
    grid-column: 2;
  }
  .contact__form {
    grid-column: 3;
    grid-row: 1;
  }
}

</style>
