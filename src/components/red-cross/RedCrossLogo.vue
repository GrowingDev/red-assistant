<template>
  <div id="rc-logo">
    <img alt="rc-ci" src="@/assets/rc-ci.png" />
  </div>
</template>

<script>
export default {
  name: "RedCrossLogo",
};
</script>

<style lang="scss" scoped>
#rc-logo {
  img{
position: fixed;
  left: 50%;
  width: 100px;
  height: auto;
  bottom: 30px;
  margin-top: -50px; /* Half the height */
  margin-left: -50px;
  z-index: -1;
  }
  
}

@media only screen and (min-width: 800px) {
  #rc-logo {
    img{
      left:92%;
 bottom: 30px;
    }
  }
}
</style>