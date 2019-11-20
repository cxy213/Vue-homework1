<template>
  <div class="todo-list">
    <Mainnet></Mainnet>
    <h3>ToDo-List</h3>
    <ToDoLists :data-source="list"  @pfInfo="getMsg"></ToDoLists>
  </div>
</template>

<script>
import ToDoLists from '../components/todo-list.vue';
import Mainnet from '../components/Mainnet';

export default {
  name: 'Todo',
  components: {
    ToDoLists,
    Mainnet,
  },
  data() {
    return {
      activeIndex: "2",
      url: 'https://api.myjson.com/bins/juq4a',
      list: [],
    };
  },
  async created() {
    this.feitch();
  },
  methods: {
    async feitch() {
      // const { data } = await this.$http.get(this.url);
      // this.list = data.list;
      await this.$store.dispatch('CHECKTODOLIST', {
        url: this.url,
      });
      console.log(this.$store.state);
      this.list = this.$store.state.list;
    },
    getMsg(text) {
      this.list.push({ text, done: false });
    },
  },
};
</script>

<style lang="less">
</style>
