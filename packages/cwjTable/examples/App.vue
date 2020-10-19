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
          status: true, //编辑状态
        },
        {
          label: "配送信息",
          children: [
            {
              label: "姓名",
              prop: "name",
              status: true,
            },
            {
              label: "地址",
              children: [
                {
                  label: "省份",
                  prop: "province",
                  status: true,
                },
                {
                  label: "市区",
                  prop: "city",
                  status: true,
                },
                {
                  label: "地址",
                  prop: "address",
                  status: true,
                },
                {
                  label: "邮编",
                  prop: "zip",
                  status: true,
                },
              ],
            },
          ],
        },
      ],
      tableData: [
        {
          date: "2016-05-03",
          name: ["曹操", "孙权"],
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-02",
          name: ["吕布", "貂蝉"],
          province: "北京",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: ["诸葛亮", "周瑜"],
          province: "南通",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: ["大乔", "小乔"],
          province: "江苏",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
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
