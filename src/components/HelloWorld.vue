<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <p class="mb-2">The application is configured and ready to import our components. You will find MDB Vue docs <a href="https://mdbootstrap.com/vue/" target="_blank">here</a>.</p>
    <p>Please type <span class="black-text">npm run demo</span> or <span class="black-text">yarn demo</span> to launch our Demonstration Page. The files with the code are placed in the <span class="black-text">demo</span> directory.</p>
    <p>If You want to completely remove our demo from Your App, easily type <span class="black-text">npm run remove-demo</span> or <span class="black-text">yarn remove-demo</span>.</p>
 
 
 <form action="//formspree.io/zonadexe@rmailgroup.in" method="POST">
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
      msg: 'Welcome to Your MDB Vue.js App'
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
  font-size: 14px;
}
</style>
