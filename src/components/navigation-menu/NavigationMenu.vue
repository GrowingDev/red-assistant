<template>
  <div v-if="visible" id="navigation-menu">
      <h1>menu</h1>
  </div>
</template>

<script>
export default {
 name: 'NavigationMenu',
 props: {
   visible: Boolean,
 }
}
</script>

<style lang="scss" scoped>
#navigation-menu{
    background: #b70e0c !important;
    width: 100%;
    height:100vh;
    position: absolute;
    padding-top:70px;
    padding:15px;
    left:0;
    top:0;
    bottom:0;
    z-index:10;
    color:white !important;
    display:flex;
    flex-direction: column;
    justify-content: center;
}
</style>