<template>
  <div id="label-bottom">
 
    <span>{{ name}}</span>
       <h1>{{ data }}</h1>
  </div>
</template>

<script>
export default {
  name: "LabelBottom",
  props: {
    data: String,
    name: String,
  },
};
</script>

<style scoped lang="scss">
#label-bottom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  h1 {
    font-size: 30px;
    color: #790907;
  }
  span{
      font-size:20px;
      color:black;
      font-weight: 500;
  }
}
</style>