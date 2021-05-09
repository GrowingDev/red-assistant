<template>
  <div class="page dashboard">

    <div id="dashboard-top">
      <label-bottom :data="schedules.openTimes" name="ÖFFNUNGSZEITEN" />
      <label-bottom :data="mission.vaccine.name" name="IMPFSTOFF" />
    </div>

    <div id="dashboard-center">
      <span class="dashboard-section">TERMINE</span>
      <dashboard-schedules :schedules="schedules" />
    </div>

    <div id="dashboard-bottom">
      <span class="dashboard-section">BESONDERHEITEN</span>
      <dashboard-events :events="mission.events" />
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
  text-align: center;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
#dashboard-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 600px;
  padding-top:100px;
  padding-bottom: 100px;
}
#dashboard-center {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 600px;
  padding-bottom: 50px;
}
#dashboard-bottom {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 600px;
}

.dashboard-section {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
}
</style>