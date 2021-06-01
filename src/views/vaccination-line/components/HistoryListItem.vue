<template>
  <li class="history-list-item">
    <span>{{ order.timestamp }}</span>
    <div class="history-list-item-amount">
      <h1>{{order.amount}}</h1>
      <span>Spritzen</span>
    </div>
    <button class="history-list-item-status">
        t
    </button>
  </li>
</template>

<script>
export default {
  props: {
    order: Object,
  },
};
</script>

<style lang="scss" scoped>
.history-list-item {
  height: 70px;
  width: 100%;
  background: white;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  border-radius: 5px;
  list-style: none;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  z-index: 10;
  span {
    font-size: 16px;
  }
  .history-list-item-amount {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 20px;
      font-weight: 400;
      color: #fe0000;
    }
  }
}
</style>