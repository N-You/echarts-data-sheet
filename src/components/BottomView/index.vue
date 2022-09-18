<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="table-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">93,634</div>
                <vChart :option="searchUserOptions" />
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">198,782</div>
                <vChart :option="searchUserOptions" />
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column
                  prop="rank"
                  label="排名"
                  width="180"
                ></el-table-column>
                <el-table-column
                  prop="keyword"
                  label="关键词"
                  width="180"
                ></el-table-column>
                <el-table-column
                  prop="count"
                  label="总搜索量"
                ></el-table-column>
                <el-table-column
                  prop="users"
                  label="搜索用户数"
                ></el-table-column>
              </el-table>
              <el-pagination
                layout="prev,pager,next"
                :total="100"
                :page-size="4"
                background
                @current-change="onPageChange"
              />
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="small">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <vChart :option="categoryOptions" />
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>
<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  name: 'BottomView',
  mixins: [commonCardMixin],
  data () {
    return {
      radioSelect: '品类',
      searchUserOptions: {
        xAxis: {
          type: 'category'
        },
        yAxis: {
          show: false,
          min: 0,
          max: 300
        },
        series: [
          {
            type: 'line',
            data: [100, 150, 200, 250, 200, 150, 100, 50, 100, 150],
            areaStyle: {
              color: 'rgba(95,187,255,.5)'
            },
            lineStyle: {
              color: 'rgb(95,187,255)'
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true
          }
        ],
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }
      },
      tableData: [
        {
          id: 1,
          rank: 1,
          keyword: '北京',
          count: 100,
          users: 90,
          range: '90%'
        },
        {
          id: 2,
          rank: 1,
          keyword: '北京',
          count: 100,
          users: 90,
          range: '90%'
        },
        {
          id: 3,
          rank: 1,
          keyword: '北京',
          count: 100,
          users: 90,
          range: '90%'
        },
        {
          id: 4,
          rank: 1,
          keyword: '北京',
          count: 100,
          users: 90,
          range: '90%'
        },
        {
          id: 5,
          rank: 1,
          keyword: '北京',
          count: 100,
          users: 90,
          range: '90%'
        }
      ],
      searchNumberOptions: {},
      categoryOptions: {}
    }
  },
  mounted () {
    this.renderPieChart()
  },
  methods: {
    onPageChange (page) {
      console.log(
        '🚀 ~ file: index.vue ~ line 112 ~ onPageChange ~ page',
        page
      )
    },
    renderPieChart () {
      const mockData = [
        {
          legendname: '粥店',
          name: '粥店 | 15%',
          value: 18,
          percent: '15%',
          itemStyle: {
            color: 'red'
          },
          label: {
            color: 'red'
          }
        }, {
          legendname: '简餐',
          name: '简餐 | 15%',
          value: 190,
          percent: '15%',
          itemStyle: {
            color: 'gray'
          },
          label: {
            color: 'gray'
          }
        },
        {
          legendname: '汉堡',
          name: '汉堡 | 15%',
          value: 100,
          percent: '15%',
          itemStyle: {
            color: 'green'
          },
          label: {
            color: 'green'
          }
        }
      ]
      this.categoryOptions = {
        title: [{
          text: '品类分类',
          textStyle: {
            fontSize: 14,
            color: '#666'
          },
          left: 20,
          top: 20
        }, {
          text: '累计订单量',
          subtext: '320',
          x: '34.5%',
          y: '42.5%',
          textStyle: {
            fontSize: 14,
            color: '#999'
          },
          subtextStyle: {
            fontSize: 28,
            color: 'black'
          },
          textAlign: 'center'
        }],
        series: [{
          type: 'pie',
          data: mockData,
          label: {
            normal: {
              show: true,
              position: 'outside',
              formatter: function (params) {
                // console.log('🚀 ~ file: index.vue ~ line 209 ~ renderPieChart ~ params', params)
                return params.data.legendname
              }
            }
          },
          center: ['35%', '50%'],
          radius: ['45%', '60%'],
          labelLine: {
            normal: {
              length: 5,
              length2: 3,
              smooth: true
            }
          },
          clockwise: false,
          itemStyle: {
            borderWidth: 4,
            borderColor: '#fff'
          }
        }],
        legend: {
          type: 'scroll',
          orient: 'vertical',
          height: 250,
          left: '70%',
          top: 'middle',
          textStyle: {
            color: '#8c8c8c'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            // console.log('🚀 ~ file: index.vue ~ line 270 ~ renderPieChart ~ params', params)
            const str = params.marker + params.data.legendname + '<br />' +
            '数量:' + params.data.value + '<br />' +
            '占比:' + params.data.percent
            return str
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .bottom-view {
    display: flex;
    margin-top: 20px;

    .view {
      flex: 1;
      width: 50%;
      box-sizing: border-box;

      &:first-child {
        padding: 0 10px 0 0;
      }

      &:last-child {
        padding: 0 0 0 10px;
      }

      .title-wrapper {
        display: flex;
        align-items: center;
        height: 60px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        font-size: 14px;
        font-weight: 500;
        padding: 0 0 0 20px;

        .radio-wrapper {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          padding-right: 20px;
        }
      }

      .chart-wrapper {
        display: flex;
        flex-direction: column;
        height: 452px;

        .chart-inner {
          display: flex;
          padding: 0 10px;
          margin-top: 20px;

          .chart {
            flex: 1;
            padding: 0 10px;

            .chart-title {
              color: #999;
              font-size: 14px;
            }

            .chart-data {
              font-size: 22px;
              color: #333;
              font-weight: 500;
              letter-spacing: 2px;
            }

            .echarts {
              height: 50px;
            }
          }
        }

        .table-wrapper {
          flex: 1;
          margin-top: 20px;
          padding: 0 20px 20px;

          .el-pagination {
            display: flex;
            justify-content: flex-end;
            margin-top: 15px;
          }
        }
      }
    }
  }
</style>
