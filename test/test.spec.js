import { createLocalVue, shallowMount } from "@vue/test-utils";
import { expect } from "chai";
import { it } from "mocha";
import Vuex from "vuex";
import index from "../pages/index.vue";
const localVue = createLocalVue();

localVue.use(Vuex);
const store = new Vuex.Store({
  state: { modalStatus: false },
});
describe("テスト", () => {
  const wrapper = shallowMount(index, { store, localVue });
  beforeEach(() => {
    wrapper.vm.testData = true;
  });
  it("HTMLテスト", () => {
    expect(wrapper.vm.testData).equal(true);
  });
  it("メソッドテスト", () => {
    wrapper.vm.onClick();
    expect(wrapper.vm.testData).equal(false);
  });
  it("メソッドテスト", () => {
    wrapper.vm.test();
    expect(wrapper.vm.addCount(10)).equal(15);
    console.log(wrapper.attributes());
  });
});
