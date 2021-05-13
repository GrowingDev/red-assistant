<template>
  <div id="navigation-bar">
    <nav id="nav">
      <div id="nav-left">
        <button id="nav-toogle" @click="$emit('toogleMenu')">
          <img src="@/assets/icons/menu_black.svg" alt="" />
        </button>
      
      </div>
      <div id="nav-center"> 
      <h2>{{$route.name.toUpperCase()}}</h2></div>
      <div id="nav-right"></div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavigationBar",
  emits: ['toogleMenu'],
};
</script>
<style lang="scss" scoped>
#navigation-bar {
  position: fixed;
  top: 0;
  width:100%;
  z-index: 11;
  background: white;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
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
  text-align: center;
  h2{
    color: black !important;
  font-size: 20px;
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
