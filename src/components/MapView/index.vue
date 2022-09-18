<template>
  <div class="map-view">
    <div class="left">
      <BMap/>
    </div>
    <div class="right">
      <el-card shadow="true">
        <template v-slot:header>
          <div class="title">用户月同比增长</div>
        </template>
        <tempalte>
          <div class="chart-wrapper">111</div>
        </tempalte>
      </el-card>
      <el-card shadow="true">
        <template v-slot:header>
          <div class="title">热门搜索</div>
        </template>
        <tempalte>
          <div class="chart-wrapper">111</div>
        </tempalte>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MapView'
}
</script>

<style scoped lang="sass">
.map-view
  display: flex
  margin-top: 20rem
  .left
    flex: 0 0 80%
    width: 80%
    height: 600rem
    background: white
  .right
    flex: 1
    display: flex
    flex-direction: column
    justify-content: space-between
    margin-left: 20rem
    .title
      display: flex
      align-items: center
      height: 60rem
      box-sizing: border-box
      font-size: 14rem
      font-weight: 500
      padding: 0 0 0 20rem
    .chart-wrapper
      width: 100%
      height: 190rem
</style>
