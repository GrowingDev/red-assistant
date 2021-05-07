<template>
  <div id="login">
    <logo />
  <h2 style="color: #790907;margin-bottom: 30px;">LOGIN</h2>
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
        <input
          type="password"
          v-model.trim="loginForm.password"
          placeholder="Password"
          id="password"
          class="input-default"
          autocomplete
        />
        <div id="ph"></div>
        <button class="button button-default" @click="login()">Anmelden</button>
      </form>
    </div>
    <red-cross-logo />
  </div>
</template>

<script>
import RedCrossLogo from "../../components/red-cross/RedCrossLogo.vue";
import Logo from "@/components/logo/Logo.vue";
export default {
  components: { RedCrossLogo, Logo },
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
#ph{
  height: 30px;
}
#login {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: black;
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