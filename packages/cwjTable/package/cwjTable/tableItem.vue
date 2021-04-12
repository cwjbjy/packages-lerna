<template>
  <!-- 多级表头 -->
  <el-table-column :label="coloumnHeader.label" align="center">
    <template v-for="(item, index) in coloumnHeader.children">
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
  </el-table-column>
</template>

<script>
import tableColumn from "./tableColumn";
export default {
  name: "tableItem",
  components: {
    tableColumn,
  },
  props: {
    coloumnHeader: {
      type: Object,
      required: true,
    },
  },
};
</script>