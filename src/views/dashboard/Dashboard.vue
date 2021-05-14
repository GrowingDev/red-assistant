<template>
  <div class="page dashboard">
    <div id="dashboard-left">
      <div class="dashboard-content">
        <h1>Öffnungszeiten</h1>
        <p>12:30 - 18:40</p>
        <p>12:30 - 18:40</p>
      </div>

      <div class="dashboard-content">
        <h1>Impfstoff</h1>
        <p>Pfizer</p>
      </div>
    </div>
    <div id="dashboard-right">
      <div class="dashboard-content">
        <h1>Termine</h1>
        <div id="dashboard-schedules">
          <div class="schedules-item">
            <p>25.6</p>
            <h5>FOLGETERMIN</h5>
          </div>
          <div class="schedules-ph"></div>
          <div class="schedules-item">
            <p>900</p>
            <h5>Gebucht</h5>
          </div>
          <div class="schedules-ph"></div>
          <div class="schedules-item">
            <p>800</p>
            <h5>Offen</h5>
          </div>
          <div class="schedules-ph"></div>
          <div class="schedules-item">
            <p>100</p>
            <h5>Eingecheckt</h5>
          </div>
        </div>
      </div>
      <div class="dashboard-content">
        <h1>Briefing</h1>
        <p>Heute wird die Feuerwehr geimpft, des Weiteren kommt der Bürgermeister um 15:00Uhr.</p>
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
.dashboard {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: rgb(183, 14, 12);
  background: linear-gradient(0deg, #b70e0c 30%, rgba(253, 3, 3, 1) 100%);
  width: 100%;
  height: 100vh;
}
.dashboard-ph {
  height: 100px;
}
#dashboard-left,
#dashboard-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  h1 {
    font-size: 22px !important;
    text-transform: uppercase;
    font-family: Dunant-Medium;
  }
  p {
    font-size: 26px;
    font-family: Dunant-Light;
  }
}
#dashboard-left {
  flex: 1;
  padding-left: 100px;
  padding-right: 100px;
}
#dashboard-right {
  flex: 2;
}

.schedules-ph {
  margin-left: 15px;
  margin-right: 15px;
  height:30px;

  border-left: 1px solid white;
}
.dashboard-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 200px;
}
#dashboard-schedules {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.schedules-item {
  text-align: center;
  text-transform: uppercase;
  h5{
    font-size: 16px;
  }
}
</style>