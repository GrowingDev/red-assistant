<template>
  <div class="page">
    <div id="dashboard-body">
      <div class="card">
        <div class="card-title">
          <h3>IMPFSTOFF</h3>
        </div>
        <div class="card-body">
          <h1 id="label-vaccine">{{ mission.vaccine }}</h1>
        </div>
        <div class="card-footer"></div>
      </div>
      <div class="placeholder"></div>
      <div class="card">
        <div class="card-title">
          <h3>TERMINE</h3>
        </div>
        <div class="card-body">
          <h1 id="label-vaccine">{{ mission.patients }}</h1>
        </div>
        <div class="card-footer"></div>
      </div>
      <div class="placeholder"></div>
      <div class="card">
        <div class="card-title">
          <h3>ÖFFNUNGSZEITEN</h3>
        </div>
        <div class="card-body">
          <h1 id="label-vaccine">{{ mission.time }}</h1>
        </div>
        <div class="card-footer"></div>
      </div>
      <div class="placeholder"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      mission: {
        vaccine: "Pfizer",
        patients: "900",
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
  align-items: center;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
}
.card-title{

}
.card-body {

}
#label-vaccine {
 color: #b70e0c;
}

.card-footer {

}
.placeholder{
  min-height:15px;
  width:100%;
}
</style>