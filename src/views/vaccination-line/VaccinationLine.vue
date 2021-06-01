<template>
  <div class="page vaccination-line">
    <h1 id="vaccination-line-id">{{ $route.params.id }}</h1>
    <span>Linie</span>
    <div id="vaccination-line-kpi">
      <LabelTop :data="'---'" :name="'Impfungen'" />
      <LabelTop :data="'300'" :name="'Spritzen'" />
    </div>
    <button class="vaccination-line-order-vaccine">Impfung eintragen</button>
    <div id="vaccination-line-order">
      <h1>Impfstoff bestellen</h1>
      <OrderVaccine />
    </div>
    <div id="vaccination-line-order-history">
      <OrderHistory :orders="orders" />
    </div>
  </div>
</template>

<script>
import LabelTop from "@/components/labels/LabelTop.vue";
import OrderVaccine from "./components/OrderVaccine.vue";
import OrderHistory from "./components/OrderHistory.vue";
export default {
  props: {
    line: Object,
  },
  components: {
    LabelTop,
    OrderVaccine,
    OrderHistory,
  },
  data() {
    return {
      orders: [
        {
          timestamp: "12:30",
          amount: 20,
          shipped: true,
        },
         {
          timestamp: "12:31",
          amount: 20,
          shipped: true,
        },
         {
          timestamp: "12:32",
          amount: 20,
          shipped: true,
        },
         {
          timestamp: "12:33",
          amount: 20,
          shipped: true,
        },
         {
          timestamp: "12:32",
          amount: 20,
          shipped: true,
        },
         {
          timestamp: "12:33",
          amount: 20,
          shipped: true,
        },
         {
          timestamp: "12:32",
          amount: 20,
          shipped: true,
        },
         {
          timestamp: "12:33",
          amount: 20,
          shipped: true,
        },
        
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.divider {
  width: 100px;
  height: 1px;
}
#vaccination-line-kpi {
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  border-bottom: solid 1px #c0c0c0;
  margin-bottom: 20px;
}
#vaccination-line-order {
  margin-top: 20px;
  padding-top: 20px;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  border-top: solid 1px #d6d6d6;
  margin-bottom: 20px;
  text-transform: uppercase;
  h1 {
    font-size: 20px;
    color: #c0c0c0;
    font-family: Dunant-Medium;
    width: 100%;
  }
}
.vaccination-line {
  margin-top: 80px;
  text-align: center;
  background: #f9f9f9;
  #vaccination-line-id {
    color: #fe0000;
    font-size: 40px;
    font-family: Dunant-Medium;
    text-align: center;
  }
  span {
    color: #c0c0c0;
    color: black;
    font-size: 24px;
    font-family: Dunant-Bold;
  }
}
.vaccination-line-order-vaccine {
  outline: 0;
  border: none;
  height: 45px !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: Dunant-Bold;
  border-radius: 5px;
  background: #b70e0c !important;
  color: white !important;
  text-decoration: none !important;

  width: 100%;
  min-height: 80px;
  font-weight: 400 !important;
  font-size: 16px !important;
  text-transform: uppercase;
}
.vaccination-line-order-history{
  width:100%;
  display:flex;
  flex-direction: column;
  align-items: stretch;
}
</style>