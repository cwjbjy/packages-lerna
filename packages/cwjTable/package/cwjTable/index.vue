<template>
  <el-table :data="tableData">
    <template v-for="(item, index) in tableHeader">
      <table-item
        v-if="item.children"
        :key="index"
        :coloumn-header="item"
      ></table-item>
      <table-column
        :key="index"
        v-else
        :label="item.label"
        :prop="item.prop"
      ></table-column>
    </template>
  </el-table>
</template>

<script>
import tableItem from "./tableItem";
import tableColumn from "./tableColumn";
export default {
  name: "cwjTable",
  props: {
    tableData: {
      type: Array,
      default: [],
    },
    tableHeader: {
      type: Array,
      default: [],
    },
  },
  components: {
    tableItem,
    tableColumn,
  },
};
</script>

<style lang="scss">
.cell {
  padding: 0 !important;

  span {
    display: block;
    padding: 12px;
  }

  .cell-content {
    border-top: 1px solid #e9eaec;
  }

  .cell-content:nth-of-type(1) {
    border-top: none;
  }

  .spanContent {
    cursor: pointer;
  }
}
</style>