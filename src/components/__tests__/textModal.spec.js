import { shallowMount } from "@vue/test-utils";
import registerFontAwesomeIcons from "../../fontAwesome";
import TextModal from "../TextModal.vue";

describe("TextModal.vue", () => {
  registerFontAwesomeIcons();

  it("renders the title", () => {
    const modal = shallowMount(TextModal, {
      propsData: {
        value: true,
        title: "Modal title",
      },
    });

    expect(modal.find("h2").text()).toBe("Modal title");
  });

  it("renders the paragraphs in order", () => {
    const modal = shallowMount(TextModal, {
      propsData: {
        value: true,
        title: "Title",
        text: ["Paragraph 1", "Paragraph 2"],
      },
    });

    expect(modal.findAll("p").at(0).text()).toBe("Paragraph 1");
    expect(modal.findAll("p").at(1).text()).toBe("Paragraph 2");
  });

  it("don't render title or text if the value is false", () => {
    const modal = shallowMount(TextModal, {
      propsData: {
        value: false,
        title: "Title",
        text: ["text"],
      },
    });

    expect(modal.find("h2").exists()).toBe(false);
    expect(modal.find("p").exists()).toBe(false);
  });
});
