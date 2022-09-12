<template>
  <div class="sales-view">
    <el-card shadow="hover" :body-style="{ padding: '0 0 20rem 0' }">
      <template v-slot:header>
        <div class="menu-wrapper">
          <el-menu
            mode="horizontal"
            :default-active="activeIndex"
            @select="onMenuSelect"
            class="sales-view-menu"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group v-model="redioSelect" size="small">
              <el-radio-button label="今日" />
              <el-radio-button label="本周" />
              <el-radio-button label="本月" />
              <el-radio-button label="今年" />
            </el-radio-group>
            <el-date-picker
              v-model="data"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              size="small"
              :picker-options="pickerOptions"
              class="sales-view-data-picker"
            >
            </el-date-picker>
          </div>
        </div>
      </template>
      <template>
        <div class="sales-view-chart-wrapper">
          <vChart :option="charOptions" />
          <div class="sales-view-list">
            <div class="sales-view-title">排行榜</div>
            <div class="list-item-wrapper">
              <div class="list-item" v-for="item in rankData" :key="item.no">
                <div :class="['list-item-no', +item.no <= 3 ? 'top-no' : '']">
                  {{ item.no }}
                </div>
                <div class="list-item-name">{{ item.name }}</div>
                <div class="list-item-money">{{ item.money }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>
<script>
import commonCardMixin from '@/mixins/commonCardMixin'
export default {
  name: 'SalesView',
  mixins: [commonCardMixin],
  data () {
    return {
      activeIndex: '1',
      redioSelect: '今日',
      data: null,
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      charOptions: {
        title: {
          text: '年度销售额',
          textStyle: {
            fontSize: 12,
            color: '#666'
          },
          left: 25,
          top: 20
        },
        xAxis: {
          type: 'category',
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ],
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: '#999'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: '#333'
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              tyep: 'dotted',
              color: '#eee'
            }
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: '35%',
            data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290]
          }
        ],
        color: ['#3398DB'],
        grid: {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50
        }
      },
      rankData: [
        {
          no: 1,
          name: '麦当劳',
          money: 120
        },
        {
          no: 2,
          name: '麦当劳',
          money: 120
        },
        {
          no: 3,
          name: '麦当劳',
          money: 120
        },
        {
          no: 4,
          name: '麦当劳',
          money: 120
        },
        {
          no: 5,
          name: '麦当劳',
          money: 120
        },
        {
          no: 6,
          name: '麦当劳',
          money: 120
        },
        {
          no: 7,
          name: '麦当劳',
          money: 120
        }
      ]
    }
  },
  methods: {
    onMenuSelect (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="sass" scoped>
.sales-view
  margin-top: 20rem
  .menu-wrapper
    position: relative
    display: flex
    .sales-view-menu
      width: 100%
      padding-left: 20rem
      .el-menu-item
        height: 50rem
        line-height: 50rem
        margin: 0 20rem
    .menu-right
      position: absolute
      top: 0
      right: 20rem
      height: 50rem
      display: flex
      justify-content: flex-end
      align-items: center
      .sales-view-data-picker
        margin-left: 20rem
  .sales-view-chart-wrapper
    display: flex
    height: 270rem
    .echarts
      flex: 0 0 70%
      width: 70%
      height: 100%
    .sales-view-list
      flex:1
      width: 100%
      height: 100%
      overflow: hidden
      .sales-view-title
        margin-top: 20rem
        font-size: 12rem
        color: #666
        font-weight: 500
      .list-item-wrapper
        margin-top: 15rem
      .list-item
        display: flex
        align-items: center
        font-size: 12rem
        height: 20rem
        padding: 6rem 20rem 6rem 0
        .list-item-no
          display: flex
          align-items: center
          justify-content: center
          width: 20rem
          height: 20rem
          color:#333
        .top-no
          background: #000
          border-radius: 50%
          color: #fff
          font-weight: 500
        .list-item-name
          margin-left: 10rem
          color: #333
        .list-item-money
          flex: 1
          text-align: right
:deep(.el-card__header)
  border-bottom: none
  padding: 0
</style>
