<template>
  <div id="navigation-bar">
    <nav id="nav">
      <div id="nav-left">
        <button id="nav-toogle" @click="$emit('toogleMenu')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#b90d0c"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>
      </div>
      <div id="nav-center">
        <h2>{{ $route.name.toUpperCase() }}</h2>
      </div>
      <div id="nav-right"></div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavigationBar",
  emits: ["toogleMenu"],
};
</script>
<style lang="scss" scoped>
#navigation-bar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 4.615rem;
  z-index: 12;
  background: white;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
#nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
#nav-left {
  flex: 1;
}
#nav-center {
  flex: 2;
  text-align: center;
  h2 {
    color: black !important;
    font-family: Dunant-Light;
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
  padding:none;
}
</style>
