<template>
  <div id="login">
    <section>
      <div id="login-header">
        <h1>red-assistant</h1>
      </div>
      <div id="login-body">
        <form @submit.prevent>
          <h1>Welcome Back</h1>
          <div>
            <label for="email">Email</label>
            <input
              type="text"
              v-model.trim="loginForm.email"
              placeholder="you@email.com"
              id="email"
              autocomplete
            />
          </div>
          <div>
            <label for="pwd">Password</label>
            <input
              type="password"
              v-model.trim="loginForm.password"
              placeholder="******"
              id="password"
              autocomplete
            />
          </div>
          <button class="button" @click="login()">Log In</button>
        </form>
      </div>
      <div id="login-footer">
        <a>Forgot Password</a>
        <a>Create an Account</a>
      </div>
    </section>
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

    this.$store.dispatch('login', {
      email: this.loginForm.email,
      password: this.loginForm.password
    })
  }
}
};
</script>

<style lang="scss" scoped>
#login-header {
}

#login-body {
  display: flex;
  flex-direction: column;
}

#login-footer {
  display: flex;
  flex-direction: column;
}
</style>