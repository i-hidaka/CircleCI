import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";
import index from "../pages/index.vue";

describe("テスト", () => {
  it("テスト", () => {
    expect(1 + 1).equal(1);
    const wrapper = shallowMount(index);
  });
});
