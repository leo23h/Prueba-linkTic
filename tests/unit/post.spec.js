// FILE: src/views/test_post.vue
import { shallowMount } from "@vue/test-utils";
import PostView from "@/views/post.vue";


// Mock global fetch
global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    })
  );

describe("PostView.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PostView, {
      mocks: {
        $router: {
          push: jest.fn(),
          currentRoute: {
            params: {
              idUser: 1,
            },
          },
        },
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("renders the component and displays the title", () => {
    expect(wrapper.find(".title-d").text()).toBe("Post");
  });


  it("navigates to the comments view when showMore is called", () => {
    const mockPost = { id: 1 };
    wrapper.vm.showMore(mockPost);
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith({
      name: "comments",
      params: { idPost: 1 },
    });
  });
});