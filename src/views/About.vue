<template>
  <div class="about">
    <Mainnet></Mainnet>
    <h1>This is an about page</h1>
  </div>
</template>

<script>

import Mainnet from '../components/Mainnet.vue';

export default {
  name: 'about',
      data() {
        return {
            activeIndex: "2",
        };
    },
  components: {
    Mainnet,
  },
};
</script>
