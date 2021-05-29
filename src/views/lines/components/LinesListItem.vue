<template>
<router-link :to="`/line/${line.id}`">
    <li class="lines-list-item">
      
        <div class="lines-list-item-number">
          <h3>{{ line.id }}</h3>
        </div>
        <div class="lines-list-items-counter">
          <h3>{{ amount }}</h3>
          <span>Spritzen</span>
        </div>
      
    </li>
 </router-link>s
</template>

<script>
export default {
  props: {
    line: Object,
  },
  computed: {
    amount() {
      return 30;
    },
  },
};
</script>

<style lang="scss" scoped>
.lines-list-item {
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 80px;
  margin-bottom: 10px;
  background: #fbfbfb;
  width: 100%;

  .lines-list-item-number {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: red;
    border-right: 1px solid #e2e2e2;
    width: 50px;
    font-size: 20px;
    flex: 1;
  }
}

.lines-list-item:hover {
  background: #790907;
  .lines-list-item-number {
    color: white;
  }
  .lines-list-items-counter {
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
.lines-list-items-counter {
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