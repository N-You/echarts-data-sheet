<template>
  <div class="home">
    <TopView/>
    <SalesView/>
    <BottomView/>
    <MapView/>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped lang="sass">
  .home
    width:100%
    padding: 20px
    background:#eee
    box-sizing: border-box
</style>
