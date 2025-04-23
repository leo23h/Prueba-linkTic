import { shallowMount } from "@vue/test-utils";
import AlbumsView from "@/views/albums.vue";

describe("AlbumsView.vue", () => {
    let wrapper;
    let mockRouter;
  
    beforeEach(() => {
        mockRouter = new VueRouter();
        wrapper = shallowMount(AlbumsView, {
          mocks: {
            $router: mockRouter,
            $route: {
              params: {
                idUser: 1,
              },
            },
          },
        });
      });
  
    afterEach(() => {
      wrapper.destroy();
    });
  
    it("renderizar los componentes correctamente", () => {
        expect(wrapper.find(".container").exists()).toBe(true);
        expect(wrapper.find(".title-d").text()).toBe("Albums");
    });

    it("navegar por las fotos y verificar que este ingresando al modulo de fotos", () => {
        const pushSpy = jest.spyOn(wrapper.vm.$router, "push");
        wrapper.vm.viewPhotos(1);
        expect(pushSpy).toHaveBeenCalledWith({ name: "photo", params: { idAlbum: 1 } });
    });
    
  });