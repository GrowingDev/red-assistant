<template>
  <div class="page dashboard">
    <div id="dashboard-left">
      <h1>Öffnungszeiten</h1>
      <p>12:30 - 18:40</p>
      <p>12:30 - 18:40</p>
    </div>
    <div id="dashboard-right">
        <h1>Termine</h1>
        
      </div>
  </div>
</template>

<script>
import LabelTop from "../../components/labels/LabelTop.vue";
import LabelBottom from "@/components/labels/LabelBottom.vue";
import DashboardSchedules from "./components/DashboardSchedules.vue";
import DashboardEvents from "./components/DashboardEvents.vue";
export default {
  name: "Dashboard",
  components: {
    LabelTop,
    LabelBottom,
    DashboardSchedules,
    DashboardEvents,
  },
  props: {},
  data() {
    return {
      schedules: {
        openTimes: "12:30 - 16:45",
        nextDate: "1.Mai",
        total: "900",
        open: "700",
        checked: "100",
      },
      mission: {
        vaccine: {
          name: "Astra Zeneca",
          percent: "30",
          description: ["Vektorimpfstoff", "mNRA-Impfstoff"],
        },
        events:
          "Heute werden Feuerwehr und Bildungspersonal geimpft, desweiteren kommt der Bürgermeister um 15 Uhr.",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;
  background: rgb(183, 14, 12);
  background: linear-gradient(0deg, #b70e0c 30%, rgba(253, 3, 3, 1) 100%);
  width: 100%;
  height: 100vh;
}
#dashboard-left, #dashboard-right {
  display: flex;
  flex-direction: column;
  color:white;
  h1{
    font-size: 22px !important;
    text-transform: uppercase;
    font-family: Dunant-Medium;
  }
  p {
    font-size: 26px;
    font-family: Dunant-Light;
  }
}
#dashboard-left{
  flex: 1;
  padding: 100px;
}
#dashboard-right{
  flex:2;
  padding:100px;
}
</style>