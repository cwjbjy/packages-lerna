<template>
  <el-table-column :label="label" :prop="prop" align="center">
    <template slot-scope="scope">
      <template v-if="Array.isArray(scope.row[prop])">
        <div
          v-for="(item, index) in scope.row[prop]"
          class="cell-content"
          :key="index"
        >
          <span :class="formatterColorArr(item, prop)">{{
            arrFormatter(item, prop)
          }}</span>
        </div>
      </template>
      <template v-else>
        <span :class="formatterColor(scope.row, prop)">{{
          formatter(scope.row, prop)
        }}</span>
      </template>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: "tableColumn",
  props: ["label", "prop"],
  computed: {
      /* 判据 */
    arrFormatter() {
      return function (value, prop) {
        if (prop === "state") {
          if (value === 0) {
            return "合格";
          } else {
            return "不合格";
          }
        } else {
          return value;
        }
      };
    },
    formatterColorArr(){
       return function (value, prop) {
        if (prop === "state") {
          if (value === 0) {
            return "";
          } else {
            return "yellow";
          }
        } else {
          return '';
        }
      }; 
    },
    formatter() {
      return function (row, prop) {
        if (prop === "formatter") {
          if (row[prop] === 0) {
            return "无";
          } else if (row[prop] === 1) {
            return "黄色";
          } else {
            return "红色";
          }
        } else if (prop === "state") {
          if (row[prop] === 0) {
            return "合格";
          } else {
            return "不合格";
          }
        } else {
          return row[prop];
        }
      };
    },
    formatterColor() {
      return function (row, prop) {
        if (prop === "formatter") {
          if (row[prop] === 0) {
            return "";
          } else if (row[prop] === 1) {
            return "yellow";
          } else {
            return "red";
          }
        } else if (prop === "state") {
          if (row[prop] === 0) {
            return "";
          } else {
            return "yellow";
          }
        } else {
          return "";
        }
      };
    },
  },
};
</script>

<style scoped>
.yellow {
  color: yellow;
}
.red {
  color: red;
}
</style>