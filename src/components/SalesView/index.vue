<template>
  <div class="sales-view">
    <el-card shadow="hover">
      <template v-slot:header>
        <div class="menu-wrapper">
          <el-menu
            mode="horizontal"
            :default-active="activeIndex"
            @select="onMenuSelect"
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
        </div>
      </div>
      </template>
      <template> 222 </template>
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
      redioSelect: '今日'
    }
  },
  methods: {
    onMenuSelect (index) {
      this.activeIndex = index
      console.log(
        '🚀 ~ file: index.vue ~ line 26 ~ onMenuSelect ~ index',
        index
      )
    }
  }
}
</script>

<style lang="sass" scoped>
.sales-view
  margin: top 20rem
  .menu-wrapper
    display:flex
</style>
