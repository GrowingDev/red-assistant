<template>
  <div id="app">
    <navigation-bar @toogle-menu="toogleMenu" v-if="user" />
    <navigation-menu :visible="toogle" />
    <router-view />
    <red-cross-logo />
  </div>
</template>

<script>
import NavigationBar from "@/components/navigation/NavigationBar";
import NavigationMenu from "@/components/navigation-menu/NavigationMenu";
import RedCrossLogo from "@/components/red-cross/RedCrossLogo.vue";
export default {
  components: {
    NavigationBar,
    NavigationMenu,
    RedCrossLogo,
  },
  data() {
    return {
      toogle: false,
      auth: false,
    };
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    toogleMenu() {
      this.toogle = !this.toogle;
    },
    checkAuth() {
      this.$store.dispatch("checkAuth");
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  box-sizing: border-box;
}

#nav {
  padding: 15px;
  width: 100%;
}
</style>
