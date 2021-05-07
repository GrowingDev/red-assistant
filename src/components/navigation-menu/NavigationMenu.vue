<template>
  <div v-if="visible" id="navigation-menu">
      <p>menu</p>
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
    width: 300px;
    height:100vh;
    position: absolute;
    left:0;
    top:0;
    bottom:0;
    z-index:10;
}
</style>