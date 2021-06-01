<template>
  <div id="order-vaccine">
    <div class="order-vaccine-amount">
      <h1>1</h1>
      <span>Dosis</span>
    </div>
    <div class="order-vaccine-amount">
      <h1>5</h1>
      <span>Dosen</span>
    </div>
    <div class="order-vaccine-amount">
      <h1>10</h1>
      <span>Dosen</span>
    </div>
    <div class="order-vaccine-amount">
      <h1>20</h1>
      <span>Dosen</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#order-vaccine {
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: solid 1px #c0c0c0;
  background: white;
  .order-vaccine-amount {
    width: 20%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    border-radius: 5px;
    h1 {
      color: #790907;
      font-size: 20px;
    }
    span {
      color: black;
      font-family: Dunant-Medium;
    }
  }
  .order-vaccine-amount:hover {
    background: #790907;
    cursor: pointer;
    h1 {
      color: #c0c0c0;
    }
    span {
      color: #c0c0c0;
      font-family: Dunant-Medium;
    }
  }
}
</style>