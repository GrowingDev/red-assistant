<template>
  <div class="page">

  </div>
</template>

<script>
export default {
  name: "Dashboard",
  props: {
    
  },
  data() {
    return {
      mission: {
        vaccine: {
          name: "pfizer",
          percent: "30",
          description: [
            "Vektorimpfstoff",
            "mNRA-Impfstoff"
          ]
        },
        patients: {
          amount: "900",
          groups: [
            "Bildungspersonal",
            "Ü65"
          ]
        },
        time: '12:30 - 18:45'
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  background: white;
  border-radius: 4px;
  width: 100%;
  height: 150px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  text-align: start;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    h1{
      font-size: 30px;
    }
}
.card-title{

}
.card-body {

}
#label-vaccine {
 color: #b70e0c;
 text-transform: uppercase;
}

.card-footer {

}
.placeholder{
  min-height:15px;
  width:100%;
}
</style>