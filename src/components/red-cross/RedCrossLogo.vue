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

  }
  
}

@media only screen and (min-width: 800px) {
  #rc-logo {
    img{
     right:60px;
      left:auto;
 bottom: 30px;
    }
  }
}
</style>