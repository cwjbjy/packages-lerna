<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
     <wj-menu :menus="menus"/>
     <wj-table :tableData="tableData" :tableHeader="tableHeader"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import wjMenu from 'wjmenu'
import wjTable from 'wjtable'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    wjMenu,
    wjTable
  },
  mounted(){
    console.log(wjMenu)
  },
  data(){
    return{
       tableHeader: [
        {
          label: "日期",
          prop: "date",
        },
        {
          label: "格式化",
          prop: "formatter",
        },
        {
          label: "判断",
          prop: "state",
        },
        {
          label: "配送信息",
          children: [
            {
              label: "姓名",
              prop: "name",
            },
            {
              label: "地址",
              children: [
                {
                  label: "省份",
                  prop: "province",
                },
                {
                  label: "市区",
                  prop: "city",
                },
                {
                  label: "地址",
                  prop: "address",
                },
                {
                  label: "邮编",
                  prop: "zip",
                },
              ],
            },
          ],
        },
      ],
      tableData: [
        {
          date: "2016-05-03",
          state:1,
          name: ["曹操", "孙权"],
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          formatter:0
        },
        {
          date: "2016-05-02",
          state:[0,1],
          name: ["吕布", "貂蝉"],
          province: "北京",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          formatter:1
        },
        {
          date: "2016-05-04",
          state:[1,1],
          name: ["诸葛亮", "周瑜"],
          province: "南通",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          formatter:2
        },
        {
          date: "2016-05-01",
          state:[0,0],
          name: ["大乔", "小乔"],
          province: "江苏",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          formatter:0
        },
      ],
      menus: [
        {
          name: "系统首页",
          path: "/firstItem",
          key: "firstItem",
          icon: require("./assets/images/menus/home.png"),
        },
        {
          name: "模拟航线",
          path: "/fleet",
          key: "fleet",
          icon: require("./assets/images/menus/echarts_heatmap.png"),
        },
        {
          name: "图片上传",
          path: "/fileUp",
          key: "fileUp",
          icon: require("./assets/images/menus/upload.png"),
        },
        {
          name: "文件预览",
          path: "/pdf",
          key: "pdf",
          icon: require("./assets/images/menus/pdf.png"),
        },
        {
          name: "基础图表",
          path: "/baseEcharts",
          key: "baseEcharts",
          icon: require("./assets/images/menus/echarts.png"),
        },
        {
          name: "基础表格",
          path: "/baseTable",
          key: "baseTable",
          icon: require("./assets/images/menus/baseTable.png"),
        },
        {
          name: "拖拽组件",
          key: "drag",
          icon: require("./assets/images/menus/drag.png"),
          children: [
            {
              name: "拖拽列表",
              path: "/dragList",
              key: "dragList",
            },
            {
              name: "拖拽弹框",
              path: "/dragDialog",
              key: "dragDialog",
            },
          ],
        },
        {
          name: "语言转换",
          icon: require("./assets/images/menus/I18n.png"),
          path: "/I18n",
          key: "I18n",
        },
        {
          name: "流程图",
          key: "flowChart",
          icon: require("./assets/images/menus/flowChart.png"),
          children: [
            {
              name: "一般流程图",
              path: "/commonChart",
              key: "commonChart",
            },
            {
              name: "定位流程图",
              path: "/positionChart",
              key: "positionChart",
            },
            {
              name: "折叠流程图",
              path: "/foldChart",
              key: "foldChart",
            },
          ],
        },
        {
          name: "放大镜",
          path: "/magnifying",
          key: "magnifying",
          icon: require("./assets/images/menus/magnifying.png"),
        },
        {
          name: "聊天室",
          path: "/chatRoom",
          key: "chatRoom",
          icon: require("./assets/images/menus/chat.png"),
        },
        {
          name: "后台管理",
          icon: require("./assets/images/menus/manage.png"),
          path: "/manage",
          key: "manage",
        },
      ]
    }
  }
}
</script>
