<template>
  <div id="order-history">
    <h1>Bestellverlauf</h1>
    <ul>
    <HistoryListItem v-for="order in orders" :key="order.timestamp" :order="order"/>
    </ul>
  </div>
</template>

<script>
import HistoryListItem from "./HistoryListItem";
export default {
  components: {
    HistoryListItem,
  },
  props: {
    orders: Array,
  },
};
</script>

<style lang="scss" scoped>
#order-history {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: scroll;
  ul{
    width:100%;
    padding:0;
  }
  h1 {
    font-size: 20px;
    color: #c0c0c0;
    font-family: Dunant-Medium;
    text-transform: uppercase;
  }
}
</style>