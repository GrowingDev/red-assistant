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
@font-face {
  font-family: "Dunant";
  src: local("Dunant-Regular"),
   url(./fonts/Dunant-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Dunant";
  src: local("Dunant-Light"),
   url(./fonts/Dunant-Light.ttf) format("truetype");
}
@font-face {
  font-family: "Dunant";
  src: local("Dunant-Medium"),
   url(./fonts/Dunant-Medium.ttf) format("truetype");
}
@font-face {
  font-family: "Dunant";
  src: local("Dunant-Bold"),
   url(./fonts/Dunant-Bold.ttf) format("truetype");
}
#app {
  font-family: Dunant, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  box-sizing: border-box;
}

#nav {
  padding: 15px;
  width: 100%;
}
</style>
