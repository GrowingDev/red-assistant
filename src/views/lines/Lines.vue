<template>
  <div id="streets">
    <ul>
      <LinesListItem v-for="line in list" :line="line" :key="line.number" />
    </ul>
  </div>
</template>

<script>
import LinesListItem from "./components/LinesListItem.vue";
import { mapGetters } from "vuex";

export default {
  name: "Lines",
  components: {
    LinesListItem,
  },
  computed: mapGetters("lines", ["list"]),
};
</script>

<style lang="scss" scoped>
#streets {
  padding: 15px;
  padding-top: 100px;
  background: linear-gradient(0deg, #b70e0c 30%, rgba(253, 3, 3, 1) 100%);
  ul {
    padding: 0 !important;
  }
}
</style>