<template>
    <div class="todo-list">
        todo-list
        <el-input v-model="itemtext"></el-input>
        <el-button type="primary" @click="sendMessage">post</el-button>
        <ul>
            <li v-for="(item, index) in dataSource" :key="index" @click="finishHandler(item)" class="todo-list-li">
                <del v-if="item.done==true">{{item.text}}</del>
                <div v-else>{{item.text}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'todo-list',
    props: {
        dataSource: Array,
    },
    data() {
        return{
            itemtext:'',
        };
    },
    methods: {
        finishHandler(item) {
            item.done = !item.done;
        },
        sendMessage() {
            if(this.itemtext!='') {
                this.$emit('pfInfo',this.itemtext);
            }
        },
    },
};
</script>

<style scoped>
.todo-list-li{
    cursor: pointer;
}
del{
    color: gray;
}
</style>
