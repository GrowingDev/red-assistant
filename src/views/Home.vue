<template>
  <div id="home">
    <div id="home-header">
    <img alt="Vue logo" src="@/assets/logo.png">
    <h3>DesignCenter</h3>
    <h3>Linz</h3>
    </div>
    <div id="home-body">
      <router-link class="button button-default" to="/login">Anmelden</router-link>
      <router-link class="button button-default" to="/signup">Registrieren</router-link>
    </div>
    <div id="home-footer">
      <p href="">v0.01</p>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',

}
</script>

<style lang="scss" scoped>
#home {
  display: flex;
  height: 100vh;
  flex-direction: column;
  padding: 15px;
}
#home-header {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#home-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}

#home-footer {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;

  a{
    color:black;
  }
}

</style>
