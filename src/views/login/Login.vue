<template>
  <div id="login">
    <logo />
  <h2 style="margin-bottom: 30px;">LOGIN</h2>
    <div id="login-body">
      <form @submit.prevent>
        <input
          type="text"
          v-model.trim="loginForm.email"
          placeholder="your@email.com"
          id="email"
          class="input-default"
          autocomplete
        />
        <div id="ph-small"></div>
        <input
          type="password"
          v-model.trim="loginForm.password"
          placeholder="Password"
          id="password"
          class="input-default"
          autocomplete
        />
        <div id="ph"></div>
        <button class="button button-default" @click="signIn(loginForm)">Anmelden</button>
      </form>
    </div>
  
  </div>
</template>

<script>

import Logo from "@/components/logo/Logo.vue";
import {mapActions} from 'vuex';
export default {
  components: { Logo },
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
     ...mapActions("auth", ["signIn"]),
   
  }
    
  
};
</script>

<style lang="scss" scoped>
#ph{
  height: 30px;
}
#ph-small{
  height:15px
}
#login {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

#login-body {
  display: flex;
  flex-direction: column;
  h2 {
    margin-bottom: 20px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      font-weight: 400;
    }
  }
}

</style>