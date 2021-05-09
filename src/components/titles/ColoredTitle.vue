<template>
  <div id="colored-title">
<h1 id="first-title">{{title.first}}</h1>
<h1 id="second-title">{{title.second}}</h1>
  </div>
</template>

<script>
export default {
name: "ColoredTitle",
props: {
    title:{
        first: String,
        second: String
    }
}
}
</script>

<style lang="scss" scoped>
#colored-title {
    display:flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    color: black;
    text-transform: uppercase;
    #first-title{
      // color: #FD0303;
    }
}

</style>