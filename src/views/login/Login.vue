<template>
  <div id="login">
    <div id="login-header">
      <img alt="Vue logo" src="../../assets/logo.png" />
    </div>
    <div id="login-body">
      <form @submit.prevent>
        <h2>Login</h2>
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
        <button class="button button-default" @click="login()">Log In</button>
      </form>
    </div>
    <div id="login-footer">
      <a>Forgot Password</a>
    </div>
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
    login() {
      this.$store.dispatch("login", {
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
  height: 100vh;
  flex-direction: column;
  padding: 15px;
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

  flex: 1;
   form {
    width: 100%;
    display: flex;
    flex-direction: column;
      align-items: center;
  }
}

#login-footer {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 2;
}


</style>