<template>
  <div class="common-card">
    <div class="title">{{title}}</div>
    <div class="value">{{value}}</div>
    <div class="chart">
      <slot></slot>
    </div>
    <div class="line"></div>
    <div class="total">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonCard',
  props: {
    title: {
      type: String
    },
    value: {
      type: String
    }
  }
}
</script>

<style lang="sass" scoped>
.common-card
  width:100%
  height:100%
.title
    font-size: 12rem
    color: #999
.value
  font-size: 25rem
  color: #000
  margin-top: 5rem
  letter-spacing:1rem
.chart
  height: 50rem
.line
  margin:10rem 0
  border-top:1rem solid #eee
.total
  font-size: 12rem
  color:#666
</style>
