<template>
  <div class="page dashboard">
    <div id="dashboard-ph"></div>
    <label-bottom :data="schedules.openTimes" name="ÖFFNUNGSZEITEN" />
    <div id="dashboard-ph"></div>
    <label-bottom :data="mission.vaccine.name" name="IMPFSTOFF" />
    <div id="dashboard-ph"></div>

    <span class="dashboard-section">TERMINE</span>
    <dashboard-schedules :schedules="schedules" />
    <div id="dashboard-ph"></div>
        <span class="dashboard-section">BESONDERHEITEN</span>
    <dashboard-events :events="mission.events" />

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
          "Heute werden Feuerwehr und Bildungspersonal geimpft, desweiteren kommt der Bürgermeister um 15 Uhr",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#dashboard-ph {
  height: 60px;
}
.dashboard {
  text-align: center;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.dashboard-section {
  font-size: 20px;
  font-weight: 500;
}
</style>