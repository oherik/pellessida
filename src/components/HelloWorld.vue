<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <p class="mb-2">Hallå eller! Den här sidan är väldigt mycket under konstruktion.</p>
    <p>Man kan kolla dokumentationen för MDB <a href="https://mdbootstrap.com/vue/" target="_blank">här</a> (för Eriks del).</p>
    <p>Inputfältet nedan går till en temporär mail. Testa att skicka ett meddelande om du vill!</p>
 
 
  <form :action="`//formspree.io/${mail}`" method="POST">
  <fieldset>
  <label for="name">Your name</label><br>
  <input type="text" name="name" placeholder="Name" id="name" required>
  </fieldset>
  <fieldset>
  <label for="_replyto">Your email</label><br>
  <input type="email" name="_replyto" placeholder="example@domain.com" id="_replyto" required>
  </fieldset>
  <fieldset>
  <label for="message">Your message</label><br>
  <textarea name="message" rows="1" placeholder="Message" id="message" required></textarea>
  </fieldset>
  <input class="hidden" type="text" name="_gotcha" style="display:none">
  <input class="hidden" type="hidden" name="_subject" value="Message via http://domain.com">
  <input class="button submit" type="submit" value="Send">
  </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Välkommen till Pelles sida',
      mail: `${'hutrojumlo'}${'@'}desoz.com`,
    };
  }
}
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
