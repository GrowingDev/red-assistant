<template>
  <div class="page vaccination-lines">
    <ul>
      <VaccinationLine v-for="line in list" :line="line" :key="line.number" />
    </ul>
  </div>
</template>

<script>
import VaccinationLine from "./components/VaccinationLine.vue";
import { mapGetters } from "vuex";

export default {
  name: "VaccinationLines",
  components: {
    VaccinationLine,
  },
  computed: mapGetters("vaccinationLines", ["list"]),
};
</script>

<style lang="scss" scoped>
.vaccination-lines {
  padding: 15px;
  padding-top: 70px;
  background: linear-gradient(0deg, #b70e0c 30%, rgba(253, 3, 3, 1) 100%);
  height: 100vh;
  ul {
    padding: 0 !important;
  }
}
</style>