<template>
  <div id="logo">
          <img  alt="app-logo" src="@/assets/logo.png" />
  </div>
</template>

<script>
export default {
    name: "Logo"
}
</script>

<style lang="scss" scoped>
#logo{
    img{
        width:200px;
        height:auto;
        position: absolute;
        top:15%;
        left:50%;
        margin-left: -100px;
    }
}
@media only screen and (min-width: 800px) {
#logo{
    img{
        width: 300px;
        margin-left: -150px;;
    }
}
}
</style>