<template>
  <CommonCard :title="'累计用户数'" :value="'1,087,503'">
    <template>
      <vChart :option="options"/>
    </template>
    <template v-slot:footer>
      <div class="total-users-footer">
        <span>日同比</span>
        <span class="emphasis">7.33%</span>
        <div class="increase"></div>
        <span class="mouth">日同比</span>
        <span class="emphasis">7.33%</span>
        <div class="decrease"></div>
      </div>
    </template>
  </CommonCard>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'
export default {
  name: 'TotalUsers',
  mixins: [commonCardMixin],
  data () {
    return {
      options: {
        xAxis: {
          type: 'value',
          show: false
        },
        yAxis: {
          type: 'category',
          show: false,
          boundaryGap: false
        },
        grid: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0
        },
        series: [{
          type: 'bar',
          stack: '总量',
          data: [1250],
          barWidth: 10,
          itemStyle: {
            color: '#45c964'
          }
        },
        {
          type: 'bar',
          stack: '总量',
          data: [150],
          itemStyle: {
            color: '#eee'
          }
        },
        {
          type: 'custom',
          data: [1250],
          stack: '总量',
          renderItem: (params, api) => {
            const value = api.value(0)
            const endPoint = api.coord([value, 0])
            return {
              type: 'group',
              position: endPoint,
              children: [{
                type: 'path',
                shape: {
                  d: 'M300.74544043 433.43291003c-18.04012654-18.87399937-5.28797393-51.17131722 20.21633121-51.17131724l382.48322394 0c25.50430513 0 38.25645774 32.29731787 20.21633121 51.17131724l-81.27209205 85.01435051-109.9695199 115.05411031c-11.16576039 11.67421947-29.26690202 11.67421947-40.43266242 0l-109.96951995-115.05411031-81.27209204-85.01435051z',
                  x: -5,
                  y: -20,
                  width: 10,
                  height: 10,
                  layout: 'cover'
                },
                style: {
                  fill: '#45c946'
                }
              },
              {
                type: 'path',
                shape: {
                  d: 'M723.25455957 590.56708997c18.04012654 18.87399937 5.28797393 51.17131722-20.21633121 51.17131724l-382.48322394 0c-25.50430513 0-38.25645774-32.29731787-20.21633121-51.17131724l81.27209205-85.01435051 109.9695199-115.05411031c11.16576039-11.67421947 29.26690202-11.67421947 40.43266242 0l109.96951995 115.05411031 81.27209204 85.01435051z',
                  x: -5,
                  y: 10,
                  width: 10,
                  height: 10,
                  layout: 'cover'
                },
                style: {
                  fill: '#45c946'
                }
              }
              ]

            }
          }
        }]
      }
    }
  },
  mounted () {
  }
}
</script>

<style lang="sass" scoped>
.total-users-footer
  display: flex
  align-items: center
.mouth
  margin-left: 10rem
</style>
