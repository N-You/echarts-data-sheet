<template>
  <div class="home">
    <TopView/>
    <SalesView/>
    <MapView/>
    <BottomView/>
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
    height: 100%
    padding: 20px
    background:#eee
    box-sizing: border-box
</style>
