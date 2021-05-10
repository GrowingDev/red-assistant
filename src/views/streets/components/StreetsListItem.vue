<template>
  <div>
    <li class="streets-list-item">
      <div class="streets-list-item-number">
        <h3>{{ street.number }}</h3>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "StreetsListItem",
  props: {
    street: Object,
  },
};
</script>

<style lang="scss" scoped>
.streets-list-item {
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 80px;
  margin-bottom: 10px;
}
.streets-list-item-number {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: red;
  border-right: 1px solid darkgray;
  width: 80px;
}
</style>