<template>
  <div id="home">
    <logo />
    <div id="home-buttons">
      <router-link to="/login" class="button button-default"
        >Anmelden</router-link
      >
      <router-link to="/login" class="button button-default"
        >Registrieren</router-link
      >
    </div>
  </div>
</template>

<script>
import Logo from "../components/logo/Logo.vue";
import RedCrossLogo from "../components/red-cross/RedCrossLogo.vue";
export default {
  components: {
    RedCrossLogo,
    Logo,
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
#home {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
}
</style>