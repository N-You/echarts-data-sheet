<template>
  <CommonCard :title="'累计订单量'" :value="'2157420'">
    <template>
      <vChart :option="options"/>
    </template>
    <template v-slot:footer>
      <span>昨日订单量</span>
      <span class="emphasis">3000000</span>
    </template>
  </CommonCard>
</template>
<script>
import commonCardMixin from '@/mixins/commonCardMixin'
export default {
  name: 'TotalOrders',
  mixins: [commonCardMixin],
  data () {
    return {
      options: {
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'line',
          data: [620, 432, 220, 534, 792, 430, 220, 320, 532, 320, 834, 690, 530, 220, 620],
          areaStyle: {
            color: 'purple'
          },
          lineStyle: {
            width: 0
          },
          itemStyle: {
            opacity: 0
          },
          smooth: true,
          grid: {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0
          }
        }]
      }
    }
  },
  mounted () {
  }
}
</script>
