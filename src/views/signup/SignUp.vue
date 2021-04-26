<template>
  <div id="signup">
    <div id="signup-header">
      <img alt="Vue logo" src="@/assets/logo.png" />
    </div>
    <div id="signup-body">
      <form @submit.prevent>
        <h1>Welcome</h1>
        <div class="input-label">
          <label for="email">Email</label>
          <input
            type="text"
            v-model.trim="loginForm.email"
            placeholder="you@email.com"
            id="email"
            class="input-default"
            autocomplete
          />
        </div>
        <div class="input-label">
          <label for="pwd">Password</label>
          <input
            type="password"
            v-model.trim="loginForm.password"
            placeholder="******"
            id="password"
            class="input-default"
            autocomplete
          />
        </div>
        <button class="button button-default" @click="login()">
          Registrieren
        </button>
      </form>
    </div>
    <div id="signup-footer"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signup() {
      this.$store.dispatch("signup", {
        email: this.loginForm.email,
        password: this.loginForm.password,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#signup {
  display: flex;
  height: 100vh;
  flex-direction: column;
  padding: 15px;
}
#signup-header {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}

#signup-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}

#signup-footer {
  display: flex;
  flex-direction: column;
  flex: 2;
}
</style>