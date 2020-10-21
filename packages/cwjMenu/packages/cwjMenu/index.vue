<template>
<!-- 适配所有级别菜单 || 一级二级三级等等... -->
  <nav>
    <el-menu
      :default-active="defaultActive"
      class="sidebar-el-menu"
      @select="handleSelect"
      :collapse="isCollapse"
      :background-color="bgColor"
      :text-color="textColor"
      :active-text-color="activeTextColor"
      unique-opened
      router
    >
      <menus-item :list="menus"></menus-item>
    </el-menu>
  </nav>
</template>

<script>

import menusItem from "./menusItem";
export default {
  name: "cwjMenu",
  components:{
    menusItem
  },
  props:{
    menus:{
      type:Array,
      default:[]
    }
  },
  data() {
    return {
      defaultActive: "/firstItem",
      isCollapse: false,
      bgColor: "#545c64",
      textColor: "#fff",
      activeTextColor: "#ffd04b",
    };
  },
  created() {
    //刷新时，定位到系统首页
    // let path = this.menus[0].path;
    // this.$router.push(path);
  },
  methods: {
    handleSelect(index) {
      this.defaultActive = index;
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  height: inherit;
  overflow-y: auto;
  overflow-x: hidden;
}
nav::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.el-menu{
  text-align: left;
}
</style>