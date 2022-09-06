<template>
  <div class="top-view">
    <el-row :gutter="12">
      <el-col :span="6"><el-card shadow="hover"> <TotalSales/> </el-card></el-col>
      <el-col :span="6"><el-card shadow="hover"> <TotalOrders/> </el-card></el-col>
      <el-col :span="6"><el-card shadow="hover"> <TodayUsers/> </el-card></el-col>
      <el-col :span="6"><el-card shadow="hover"> <TotalUsers/> </el-card></el-col>
      </el-row
    >
  </div>
</template>
<script>
export default {
  name: 'TopView'
}
</script>

<style lang="sass" scoped></style>
