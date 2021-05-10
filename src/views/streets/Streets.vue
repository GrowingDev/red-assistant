<template>
  <div id="streets">
    <ul>
      <streets-list-item
        v-for="street in streets"
        :street="street"
        :key="street.number"
      />
    </ul>
  </div>
</template>

<script>
import StreetsListItem from "./components/StreetsListItem.vue";
export default {
  name: "Streets",
  components: {
    StreetsListItem,
  },
  data: () => {
    return {
      streets: [
        {
          number: "1",
          injections: "1",
        },
        {
          number: "2",
          injections: "1",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#streets {
  padding: 15px;
  ul {
    padding: 0 !important;
  
  }
}
</style>