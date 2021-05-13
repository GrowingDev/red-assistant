<template>
  <div class="page dashboard">
    <div id="dashboard-top">
      <div id="dashboard-open">
        <h1></h1>
      </div>
      <div id="dashboard-schedules">
          <h1></h1>
      </div>
    </div>

    <div id="dashboard-bottom">
      <div id="dashboard-vaccine"></div>
      <div id="dashboard-briefing"></div>
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
  flex-direction: column;
  justify-content: center;
background: rgb(183,14,12);
background: linear-gradient(0deg, #B70E0C 50%, rgba(253,3,3,1) 100%);
  width:100%;
  height:100vh;
  h1{
    font-size: 20px;
  }
}
#dashboard-top {
  display: flex;
  flex-direction: row;

  #dashboard-open {
    width: 45%;
    text-align: center;

  }

  #dashboard-schedules {
    width: 50%;
    text-align: start;

  }
}
</style>