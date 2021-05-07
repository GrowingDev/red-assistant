<template>
  <div id="label-top">
    <h1>{{ data }}</h1>
    <span>{{ name}}</span>
  </div>
</template>

<script>
export default {
  name: "LabelTop",
  props: {
    data: String,
    name: String,
  },
};
</script>

<style scoped lang="scss">
#label-top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin:10px;
  h1 {
    font-size: 20px;
    color: #790907;
  }
  span{
      font-size:16px;
      color:black;
      font-weight: 500;
  }
}
</style>