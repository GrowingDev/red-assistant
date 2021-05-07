<template>
  <div id="dashboard-events">
    <p>{{ events }}</p>
  </div>
</template>

<script>
export default {
  name: "DashboardSchedules",
  components: {},
  props: {
    events: String,
  },
};
</script>

<style lang="scss" scoped>
#dashboard-events {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap-reverse;
  align-items: center;
  text-align: center;
}
</style>