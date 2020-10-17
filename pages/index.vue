<template>
  <div class="main">
    <div
      class="bg-gradient-cyan-to-turquoise py-12 lg:py-24 items-center"
    >
      <div class="mx-auto w-full max-w-5xl px-4 hero items-center">
        <div>
          <h1
            class="hero__header font-heading font-bold text-4xl lg:text-6xl text-cyan-dark mb-8"
          >
            Vill du ha professionell hjälp med din text?
          </h1>
          <p
            class="hero__paragraph font-body text-base lg:text-lg text-cyan-dark pr-6 lg:pr-0"
          >
            Jag heter Pelle Öhrn och jag gillar att vränga ord, hitta rätt ord och
            att sätta ihop ord till bra texter, tydlig information och säljande
            budskap.
          </p>
        </div>
        <img
          src="@/assets/images/typewriter.svg"
          class="hero__image mx-auto lg:mx-0 pt-8 lg:pt-0 lg:pl-24 h-full"
          alt="typewriter"
        >
      </div>
    </div>
    <div class="who items-center">
      <div class="flex flex-col who__text pt-12 pb-4 lg:py-24 px-4">
        <h1
          :class="[
            'font-heading font-bold text-2xl lg:text-4xl text-cyan-dark mb-8',
            'text-center lg:text-left',
          ]"
        >
          Vem är jag?
        </h1>
        <p class="font-body text-base lg:text-lg text-cyan-dark">
          Jag är utbildad copywriter på Berghs School of Communication och har
          arbetat 15 år som copywriter på en reklambyrå i Karlstad. Dessutom har
          jag jobbat hela mitt yrkesliv med försäljning, kundkontakter och
          marknadsföring.
        </p>
      </div>
      <img
        :src="require('@/assets/images/pelle.jpg')"
        class="p-3 lg:p-4 self-center lg:justify-self-center who__image block lg:hidden"
        alt="Pelle Öhrn"
      >
      <img
        :src="require('@/assets/images/pelle-slanted.png')"
        class="p-3 lg:p-4 self-center who__image hidden lg:block"
        alt="Pelle Öhrn"
      >
    </div>
    <div
      class="bg-gradient-lightpurple-to-pink items-center py-12 lg:py-24"
    >
      <div class="mx-auto w-full max-w-5xl px-4 what items-center">
        <TextSamples class="what__samples lg:mr-12" />
        <div>
          <h1
            :class="[
              'font-heading font-bold text-2xl lg:text-4xl text-purple-dark mb-8',
              'text-center lg:text-left',
            ]"
          >
            Vad kan jag skriva?
          </h1>
          <p
            class="font-body text-base lg:text-lg text-purple-dark"
          >
            Ja, egentligen allt! Jag är en lyhörd skribent som tar mig tid att
            lyssna på vad du vill ha och hjälper dig att uppnå dina mål. Det kan
            handla om allt ifrån researtiklar, texter till webbplatser,
            företagspresentationer och annonser till pressreleaser och nyhetsbrev
            eller att korrekturläsa en bok. Jag har Öhrnkoll på ord, helt enkelt!
          </p>
        </div>
      </div>
    </div>
    <div
      id="contact-me-section"
      class="bg-white shadow-2xl items-center py-12 lg:py-24 relative"
    >
      <div class="contact mx-auto w-full max-w-5xl px-4 what items-center">
        <div class="flex flex-col lg:pr-12 lg:pr-24">
          <h1
            class="font-heading font-bold text-2xl lg:text-4xl text-cyan-dark mb-8"
          >
            Hur når du mig?
          </h1>
          <p class="font-body text-base lg:text-lg text-cyan-dark">
            I formuläret här kan du skriva ett meddelande, så hör jag av mig inom
            kort. Du kan också skicka ett mail eller slå en signal.
          </p>
          <p class="font-body text-base lg:text-lg text-cyan-dark">
            Pelle Öhrn
          </p>
          <!--googleoff: all-->
          <p id="js-contact-phone" class="font-body text-base lg:text-lg text-cyan-dark" />
          <p id="js-contact-email" class="font-body text-base lg:text-lg text-cyan-dark" />
          <!--googleon: all-->
        </div>

        <Form class="contact__form" />
      </div>
      <Painting />
    </div>
    <div
      class="bg-gray-100 flex flex-col items-center pt-48 pb-20"
      :style="{
        backgroundImage: 'url(' + require('@/assets/patterns/cubes.png') + ')',
      }"
    >
      <p
        :class="[
          'font-body text-md lg:text-base text-gray-600 italic w-4/5 lg:w-2/5',
          'max-w-5xl m-auto text-center pt-16',
        ]"
      >
        Idag är jag med i BolagsBolaget som tar hand om sociala avgifter, skatt
        med mera. Mycket enkelt för dig som anlitar mig, eftersom du inte
        behöver tänka på de bitarna. Efter att vi har kommit överens om lön och
        tidsperiod skriver BolagsBolaget att avtal med dig, och fakturerar sen
        månadsvis eller ett engångsbelopp.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({

  data() {
    return {
      email: `${"skri"}${"v@"}pelleohrn.se`,
      phone: `${"076-833"}${" 64"} 41`,
    };
  },
  mounted() {
    /* Delayed to hide email and phone number in prerendering */
    setTimeout(() => {
      const contactForm = document.getElementById("js-contact-form");
      if (contactForm) {
        contactForm.setAttribute("action", `//formspree.io/${this.email}`);
      }
      const phoneSpan = document.getElementById("js-contact-phone");
      if (phoneSpan) {
        phoneSpan.innerHTML = this.email;
      }
      const emailSpan = document.getElementById("js-contact-email");
      if (emailSpan) {
        emailSpan.innerHTML = this.phone;
      }
    }, 500);
  },
});
</script>

<style>

.bg-gradient-cyan-to-turquoise {
  background: linear-gradient(285deg, #a4e9d7, #73cfd4);
}

.bg-gradient-lightpurple-to-pink {
  background: linear-gradient(137deg, #fde9ff 0%, #ffe0f8 100%);
}

/* BEM for some grid stuff that Tailwind has trouble with */
.hero {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 24rem;
}
.hero__image {
  grid-row: 3;
  grid-column: 1;
}

@media (min-width: 1024px) {
  .hero {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
  }
  .hero__image {
    grid-row: 1;
    grid-column: 2;
  }
}
.who {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  grid-row-gap: 1rem;
}
.who__text {
  grid-column: 1  ;
}
.who__image {
  grid-column: 1;
}
@media (min-width: 1024px) {
  .who {
    grid-template-columns: 1fr minmax(32rem, 1fr) minmax(32rem, 1fr) 1fr;
  }
  .who__text {
    grid-column: 2;
  }
  .who__image {
    grid-column: 3 / end;
  }
}
.what {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  grid-row-gap: 1rem;
}
.what__samples {
  grid-row: 3;
}
@media (min-width: 1024px) {
  .what {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
  }
  .what__samples {
    grid-row: 1;
  }
}
.contact {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  grid-row-gap: 1rem;
}
.contact__form {
  grid-row: 3;
}

@media (min-width: 1024px) {
  .contact {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
  }
  .contact__form {
    grid-row: 1;
    grid-column: 2;
  }
}
</style>
