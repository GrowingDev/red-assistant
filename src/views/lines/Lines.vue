<template>
  <div id="streets">
    <ul>
      <streets-list-item
        v-for="line in lines"
        :street="line"
        :key="line.number"
      />
    </ul>
  </div>
</template>

<script>
import StreetsListItem from "./components/StreetsListItem.vue";
export default {
  name: "Lines",
  components: {
    StreetsListItem,
  },
  props:{
    lines: Array,
  }
  
};
</script>

<style lang="scss" scoped>
#streets {
  margin-top:100px;
  padding: 15px;
  ul {
    padding: 0 !important;
  
  }
}
</style>