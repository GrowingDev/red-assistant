<template>
  <div class="page dashboard">
    <div id="dashboard-top">
      <div id="dashboard-open">
        <label-bottom :data="schedules.openTimes" name="ÖFFNUNGSZEITEN" />
      </div>
      <div id="dashboard-schedules">
        <span>TERMINE</span>
        <dashboard-schedules :schedules="schedules" />
      </div>
    </div>

    <div id="dashboard-bottom">
      <div id="dashboard-vaccine">
        <label-bottom  :data="mission.vaccine.name" name="IMPFSTOFF" />
      </div>
      <div id="dashboard-briefing">
        <span class="dashboard-section">BESONDERHEITEN</span>
        <dashboard-events :events="mission.events" />
      </div>
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

</style>