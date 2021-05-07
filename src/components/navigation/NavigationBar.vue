<template>
  <div id="navigation-bar">
    <nav id="nav">
      <div id="nav-left">
        <button id="nav-toogle" @click="$emit('toogleMenu')">
          <img src="@/assets/icons/menu_black.svg" alt="" />
        </button>
      </div>
      <div id="nav-center"> 
          <img src="@/assets/logo.png" alt="" /></div>
      <div id="nav-right"></div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavigationBar",
  emits: ['toogleMenu']
};
</script>
<style lang="scss" scoped>
#navigation-bar {
  position: sticky;
  top: 0;
  z-index: 11;
  background: white;
}
#nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
#nav-left {
  flex: 1;
}
#nav-center {
  flex: 2;
  img {
      height: 20px;
      width: auto;
  }
}
#nav-right {
  flex: 1;
}
#nav-toogle {
  background: none;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
