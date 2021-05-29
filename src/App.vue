<template>
  <div id="app">
    <navigation-bar @toogle-menu="toogleMenu" v-if="user" />
    <navigation-menu @toogle-menu="toogleMenu" :visible="toogle" />
    <router-view />
    <red-cross-logo />
  </div>
</template>

<script>
import NavigationBar from "@/components/navigation/NavigationBar";
import NavigationMenu from "@/components/navigation-menu/NavigationMenu";
import RedCrossLogo from "@/components/red-cross/RedCrossLogo.vue";
import {mapGetters} from 'vuex'
export default {
  components: {
    NavigationBar,
    NavigationMenu,
    RedCrossLogo,
  },
  data() {
    return {
      toogle: false,
    };
  },
  computed: mapGetters("auth",['user']),
  methods: {
    toogleMenu() {
      this.toogle = !this.toogle;
    },

  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Dunant-Regular";
  src: local("Dunant-Regular"),
    url(./fonts/Dunant-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Dunant-Light";
  src: local("Dunant-Light"), url(./fonts/Dunant-Light.ttf) format("truetype");
}
@font-face {
  font-family: "Dunant-Medium";
  src: local("Dunant-Medium"), url(./fonts/Dunant-Medium.ttf) format("truetype");
}
@font-face {
  font-family: "Dunant-Bold";
  src: local("Dunant-Bold"), url(./fonts/Dunant-Bold.ttf) format("truetype");
}
#app {
  font-family: Dunant-Light, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  box-sizing: border-box;
}

#nav {
  padding: 15px;
  width: 100%;
}
</style>
