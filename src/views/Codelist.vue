<template>
  <div class="home">
    <Mainnet></Mainnet>
    <p>1. v-text
v-text主要用来更新textContent，可以等同于JS的text属性。</p>
<p>
2. v-html
双大括号的方式会将数据解释为纯文本，而非HTML。为了输出真正的HTML，可以用v-html指令。它等同于JS的innerHtml属性。
</p>
<p>
3. v-pre
v-pre主要用来跳过这个元素和它的子元素编译过程。可以用来显示原始的Mustache标签。跳过大量没有指令的节点加快编译。
</p>
<p>
4. v-cloak
这个指令是用来保持在元素上直到关联实例结束时进行编译。
</p>
<p>
5. v-once
v-once关联的实例，只会渲染一次。之后的重新渲染，实例极其所有的子节点将被视为静态内容跳过，这可以用于优化更新性能。。
</p>
<p>
6. v-if
v-if可以实现条件渲染，Vue会根据表达式的值的真假条件来渲染元素。
</p>
<p>
7. v-else
v-else是搭配v-if使用的，它必须紧跟在v-if或者v-else-if后面，否则不起作用。
</p>
<p>
8. v-else-if
v-else-if充当v-if的else-if块，可以链式的使用多次。可以更加方便的实现switch语句。
</p>
<p>
9. v-show
用于根据条件展示元素。和v-if不同的是，如果v-if的值是false，则这个元素被销毁，不在dom中。但是v-show的元素会始终被渲染并保存在dom中，它只是简单的切换css的dispaly属性。
</p>
<p>
10. v-for
用v-for指令根据遍历数组来进行渲染
</p>
<p>
11. v-bind
v-bind用来动态的绑定一个或者多个特性。没有参数时，可以绑定到一个包含键值对的对象。常用于动态绑定class和style。以及href等。
简写为一个冒号【 ：】
</p>
<p>
12. v-model
这个指令用于在表单上创建双向数据绑定。
v-model会忽略所有表单元素的value、checked、selected特性的初始值。因为它选择Vue实例数据做为具体的值。
</p>
<p>
13. v-on
v-on主要用来监听dom事件，以便执行一些代码块。表达式可以是一个方法名。
简写为：【 @ 】
.stop 阻止事件继续传播
.prevent 事件不再重载页面
.capture 使用事件捕获模式,即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理
.self 只当在 event.target 是当前元素自身时触发处理函数
.once 事件将只会触发一次
.passive 告诉浏览器你不想阻止事件的默认行为
</p>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Use kinds of Vue's instructions"/>
    <el-button  type="primary"  @click="getList">获取数据</el-button>
    <el-card class="box-card" v-for="item in list" :key="item.label">
      <div slot="header" class="clearfix">
        <del v-if="item.label=='Vue'">{{item.label}}</del>
      </div>
      <div class="text item"  v-text="item.label"> </div>
       <span>{{ item.value }}</span>
    </el-card>
  </div>
</template>

<script>
// @ is an alias to /src
import Mainnet from '../components/Mainnet';
// import Vue from 'vue'
// import ElementUI from 'element-ui'
export default {
  name: 'home',
  components: {
    Mainnet,
  },
  data(){
    return{
      activeIndex: "3",
      list:[
      ]
    };
  },
  methods:{
    getList(){
       this.$http.get('https://api.myjson.com/bins/1fhj16').then(result => {
            this.list = result.data.data;
            window.console.log(result);
          })
     }
  }
}
</script>
