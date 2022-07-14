<template>
  <div @click="onClick" class="test">
    {{ testData }}
    <div>
      <div>aaa</div>
    </div>
  </div>
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
  created() {
    this.test();
  },
  methods: {
    onClick() {
      this.testData = !this.testData;
    },
    addCount(num: number) {
      return num + 5;
    },
    test() {
      console.log(this.$store.state.modalStatus);
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
