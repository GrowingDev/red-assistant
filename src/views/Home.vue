<template>
  <div id="login">

      <logo />

       <router-link to="/login" class="button button-default" >Anmelden</router-link>
        <router-link to="/login" class="button button-default" >Registrieren</router-link>
   <!--  
    <div id="login-body">
 <form @submit.prevent>
        <h3>LOGIN</h3>
          <input
            type="text"
            v-model.trim="loginForm.email"
            placeholder="your@email.com"
            id="email"
             class="input-default"
            autocomplete
          />
          <input
            type="password"
            v-model.trim="loginForm.password"
            placeholder="Password"
            id="password"
            class="input-default"
            autocomplete
          />
        <button class="button button-default" @click="login()">Anmelden</button>
      </form>
    
    </div>
    <div id="login-footer">
      <a>Forgot Password</a>
    </div>
      -->
      <red-cross-logo />
  </div>
</template>

<script>
import Logo from '../components/logo/Logo.vue';
import RedCrossLogo from '../components/red-cross/RedCrossLogo.vue';
export default {
  components: {
    RedCrossLogo,
    Logo
  },
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch("signIn", {
        email: this.loginForm.email,
        password: this.loginForm.password,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#login {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  color: black;


}

#login-header {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  
}

#login-body {
  display: flex;
  flex-direction: column;
  h2 {
    margin-bottom: 20px;
  }
  flex: 1;
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

#login-footer {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 2;
}
</style>