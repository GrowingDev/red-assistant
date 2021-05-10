<template>
  <div>
    <li class="streets-list-item">
      <div class="streets-list-item-number">
        <h3>{{ street.number }}</h3>
      </div>
      <div class="streets-list-items-counter">
          <h3>{{ street.injections }}</h3>
          <span>Bestellte Spritzen</span>
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
  background: white;

  .streets-list-item-number {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: red;
    border-right: 1px solid #e2e2e2;
    width: 50px;
    flex: 1
  }
}

.streets-list-item:hover {
  background: #790907;
  .streets-list-item-number {
    color: white;
  }
  .streets-list-items-counter{

    h3 {
    font-size: 18px;

    color: white;

  }
  span {
    font-size: 14px;
    color: white;

  }
}
}
.streets-list-items-counter{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    flex: 3;
    h3 {
    font-size: 16px;
    color: #fe0000;
  }
  span {
      font-weight: 600;
    font-size: 14px;
    color: #555555;

  }
}

</style>