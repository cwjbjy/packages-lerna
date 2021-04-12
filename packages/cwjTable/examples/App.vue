<template>
  <div id="app">
     <w-table :tableData="tableData" :tableHeader="tableHeader" />
  </div>
</template>

<script>
import WTable from "../package/cwjTable/index";
export default {
  name: "App",
  components:{
    WTable
  },
  data() {
    return {
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
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
