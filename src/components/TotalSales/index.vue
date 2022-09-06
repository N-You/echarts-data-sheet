<template>
  <CommonCard :title="'累计销售额'" :value="'￥30000'">
    <template>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">7.33%</span>
          <div class="increase"></div>
        </div>
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">7.33%</span>
          <div class="decrease"></div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <span>昨日销售额</span>
      <span class="emphasis">￥ 3000000</span>
    </template>
  </CommonCard>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'
export default {
  name: 'TotalSales',
  mixins: [commonCardMixin]
}
</script>

<style lang="sass" scoped>
.compare-wrapper
  display: flex
  height: 100%
  flex-direction: column
  justify-content: center
.compare
  height: 50%
  font-size: 12rem
  margin-top: 3rem
  display: flex
  align-items: center
  color:#666
</style>

<style lang="sass">
.emphasis
  margin-left: 5rem
  color: #333
  font-weight: 700
.increase
  width: 0
  height: 0
  border-width: 3rem
  border-color: transparent transparent red transparent
  border-style: solid
  margin: 0 0 3rem 5rem
.decrease
  width: 0
  height: 0
  border-width: 3rem
  border-color: green transparent transparent transparent
  border-style: solid
  margin: 3rem 0 0 5rem
</style>
