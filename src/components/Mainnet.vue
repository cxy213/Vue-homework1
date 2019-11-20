<template>
  <div class="Mainnet">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1" @click="tomainnet">首页</el-menu-item>
      <el-menu-item index="2" @click="totodo">ToDoList</el-menu-item>
      <el-menu-item index="3" @click="tocodelist">指令集</el-menu-item>
      <el-menu-item index="4" @click="tomynet">自定义页面</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '',
      pageSrc: "./mainResouce.vue"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    tomainnet() {
      this.$router.push({
          path: '/maRe',
      });
    },
    totodo() {
      this.$router.push({
          path: '/Todo',
      });
    },
    tocodelist() {
      this.$router.push({
          path: '/Code',
      });
    },
    tomynet() {
      this.$router.push({
          path: '/about',
      });
    }
  }
};
</script>
