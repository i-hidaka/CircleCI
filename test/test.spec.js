import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";
import index from "../pages/index.vue";

describe("テスト", () => {
  it("テスト", () => {
    const wrapper = shallowMount(index);
    console.log(wrapper.vm);
    expect(1 + 1).equal(2);
  });
});
