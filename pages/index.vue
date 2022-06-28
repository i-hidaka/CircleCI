<template>
  <div @click="onClick" class="test">{{ testData }}</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
  data() {
    return {
      testData: true,
    };
  },
  methods: {
    onClick() {
      this.testData = !this.testData;
    },
  },
});
</script>
<style scoped>
.test {
  width: 100px;
  background-color: pink;
}
</style>
