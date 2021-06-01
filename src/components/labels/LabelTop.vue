<template>
  <div id="label-top">
    <h1>{{ data }}</h1>
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
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

  h1 {
    font-size: 24px;
    font-weight: 400;
    color: #fe0000;
  }
  span {
    font-size: 16px;
    color: #c0c0c0;
    font-family: Dunant-Medium;
  }
}
</style>