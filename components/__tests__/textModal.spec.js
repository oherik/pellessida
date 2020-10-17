import { shallowMount } from "@vue/test-utils";
// eslint-disable-next-line import/no-unresolved
import { registerFontAwesomeIcons } from "~/plugins/fontAwesome";
import TextModal from "../TextModal";
import StubNuxtContent from "./StubNuxtContent";

describe("TextModal.vue", () => {
  registerFontAwesomeIcons();

  it("renders the title", () => {
    const modal = shallowMount(TextModal, {
      propsData: {
        value: true,
        text: { title: "Modal title", body: ["Test"] },
      },
      stubs: {
        NuxtContent: StubNuxtContent,
      },
    });

    expect(modal.find("h2").text()).toBe("Modal title");
  });

  it("renders the paragraphs in order", () => {
    const modal = shallowMount(TextModal, {
      propsData: {
        value: true,
        text: { title: "Modal title", body: ["Paragraph 1", "Paragraph 2"] },
      },
      stubs: {
        NuxtContent: StubNuxtContent,
      },
    });

    expect(modal.findAll("p").at(0).text()).toBe("Paragraph 1");
    expect(modal.findAll("p").at(1).text()).toBe("Paragraph 2");
  });

  it("don't render title or text if the value is false", () => {
    const modal = shallowMount(TextModal, {
      propsData: {
        value: false,
        text: { title: "Modal title", body: ["Test"] },
      },
      stubs: {
        NuxtContent: StubNuxtContent,
      },
    });

    expect(modal.find("h2").exists()).toBe(false);
    expect(modal.find("p").exists()).toBe(false);
  });
});
