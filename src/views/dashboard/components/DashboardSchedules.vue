<template>
  <div id="dashboard-schedules">
    <label-top :data="schedules.nextDate" name="Folgetermin" />
    <div class="border"></div>
    <label-top :data="schedules.total" name="Gebucht" />
    <div class="border"></div>
    <label-top :data="schedules.checked" name="Eingecheckt" />
    <div class="border"></div>
    <label-top :data="schedules.open" name="Offen" />
  </div>
</template>

<script>
import LabelTop from "@/components/labels/LabelTop.vue";
import LabelBottom from "@/components/labels/LabelBottom.vue";

export default {
  name: "DashboardSchedules",
  components: {
    LabelTop,
    LabelBottom,
  },
  props: {
    schedules: Object,
  },
};
</script>

<style lang="scss" scoped>
#dashboard-schedules {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  align-items: center;
  text-align: center;
  width: 100%;
  .border {
    border-left: 1px solid #d6d6d6;
    height: 40px;
    margin-left: 5px;
    margin-right: 5px;
  }
  .desktop {
    display: none;
  }
}

@media only screen and (min-width: 800px) {
  .desktop {
    display: flex;
  }
}
</style>