<template>
    <CommonCard :title="'今日交易用户数'" :value="'81,014'">
    <template>
      <vChart :option="options"/>
    </template>
    <template v-slot:footer>
      <span>退货率</span>
      <span class="emphasis">5.14%</span>
    </template>
  </CommonCard>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'
export default {
  name: 'TodayUsers',
  mixins: [commonCardMixin],
  data () {
    return {
      options: {
        color: ['#3398DB'],
        series: [{
          type: 'bar',
          data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150],
          barWidth: '60%'
        }],
        xAxis: {
          type: 'category',
          show: false,
          data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00']
        },
        yAxis: {
          show: false
        },
        grid: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0
        }
      }
    }
  }
}
</script>
