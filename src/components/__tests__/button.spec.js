import { shallowMount } from "@vue/test-utils";
import Button from "../Button.vue";

describe("Button.vue", () => {
  it("renders the text passed in the slot", () => {
    const button = shallowMount(Button, {
      slots: {
        default: "button text",
      },
    });

    expect(button.text()).toMatch("button text");
  });

  it("emits click on click", async () => {
    const button = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });

    button.vm.$emit("click");

    await button.vm.$nextTick();

    expect(button.emitted().click).toBeTruthy();
  });
});
