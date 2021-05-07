<template>
  <div id="app">
    <navigation-bar @toogle-menu="toogleMenu" v-if="user"/>
    <navigation-menu :visible="toogle" />
    <router-view/>
  </div>
</template>

<script>
import NavigationBar from '@/components/navigation/NavigationBar'
import NavigationMenu from '@/components/navigation-menu/NavigationMenu'

export default {
  components:{
    NavigationBar,
    NavigationMenu
  },
  data() {
    return {
      toogle: false,
      auth: false
    }
  },
 computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
 methods: {
   toogleMenu() {
     this.toogle = !this.toogle
   },
   checkAuth() {
      this.$store.dispatch("checkAuth");
    },
 }
};
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}

#nav {
  padding: 15px;
  width:100%;
 
}
</style>
