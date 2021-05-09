<template>
  <div id="label-bottom">
    <span>{{ name }}</span>
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
  text-align: start;

  h1 {
    font-size: 24px;
    font-weight: 400;
    color: #fe0000;
    margin-top: 5px;
  }
  span {
    font-size: 20px;
    color: black;
    font-weight: bold;
  }
}
</style>