<template>
  <div class="home">
    <h3>Welcome to vue work.</h3>
    <el-input placeholder="请输入用户名" v-model="form.username"></el-input>
    <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
    <el-button type="primary" @click="clicked">
      <slot></slot>登录
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    };
  },
  // created: {
  // },
  methods: {
    clicked() {
      if (this.form.username === '' || this.form.password === '') {
        alert('用户名密码不能为空。');
      } else if (
        this.form.username === 'admin' && this.form.password === '123456') {
        this.$router.push({
          path: '/maRe',
        });
      } else {
        alert('用户名或密码错误。');
      }
    },
  },
};
</script>
