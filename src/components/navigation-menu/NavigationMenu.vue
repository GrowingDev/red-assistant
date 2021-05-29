<template>
  <div v-if="visible" id="navigation-menu">
    <router-link
      v-for="route in routes"
      :key="route.title"
      :to="route.path"
      class="button button-navigation-menu"
      @click="$emit('toogleMenu')"
      >{{ route.title }}</router-link
    >
  </div>
</template>

<script>
export default {
  name: "NavigationMenu",
  props: {
    visible: Boolean,
  },
  emits: ["toogleMenu"],
  data(){
return {
  routes: [
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      title: "Impflinien",
      path: "/lines",
    },
    {
      title: "Checklisten",
      path: "/checkLists",
    }
  ],
}
  }
  
};
</script>

<style lang="scss" scoped>
#navigation-menu {
  background: white !important;
  width: max-content;
  height: 100vh;
  position: absolute;
  padding-top: 70px;
  padding: 15px;
  padding-left: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  color: white !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.button-navigation-menu {
  background: none !important;
  color: #b70e0c !important;
  text-decoration: none !important;
  max-width: 300px;
  min-width: 280px;
  width: 300px;
  font-weight: 400 !important;
  font-size: 16px !important;
  text-transform: uppercase;
  justify-content: start;
  padding: 15px;
  transition: 0.5s ease;
}
.button-navigation-menu:hover {
  padding-left: 20px;
}
</style>