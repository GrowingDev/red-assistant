<template>
  <router-link :to="`/vaccination-line/${line.id}`" class="reset">
    <li class="vaccination-line">
      <div class="vaccination-line-number">
        <h3>{{ line.id }}</h3>
        <span>Linie</span>
      </div>
      <div class="vaccination-line-counter">
        <h3>{{ amount }}</h3>
        <span>Spritzen</span>
      </div>
    </li>
  </router-link>
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
.reset {
  text-decoration: none !important;
  position: relative;
  z-index: 10;
 
}
.vaccination-line {
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 15px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 80px;

  background: #fbfbfb;
  width: 100%;
  font-family: Dunant-Medium;
  z-index: 10;
  span {
    color: black;
  }
  .vaccination-line-number {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: red;
    border-right: 1px solid #e2e2e2;
    width: 50px;
    flex: 1;
    font-size: 20px;
  }
}

.vaccination-line-counter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  flex: 3;
  font-size: 20px;
  h3 {
    color: #fe0000;
  }
}
.vaccination-line:hover {
  background: #790907;
  .vaccination-line-number {
    color: white !important;
    span {
      color: white;
    }
    h3 {
    }
    color: white;
  }
  .vaccination-line-counter {
    color: white !important;
    span {
      color: white;
    }
    h3 {
      color: white;
    }
  }
}
</style>