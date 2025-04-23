// FILE: src/views/test_photo.vue
import { shallowMount } from "@vue/test-utils";
import PhotoView from "@/views/photo.vue";

const mockuppedDataPhotos = [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
      },
]

// Mock global fetch
global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    })
  );

describe("PhotoView.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PhotoView, {
      mocks: {
        $router: {
          currentRoute: {
            params: {
              idAlbum: 1,
            },
          },
        },
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("rendetizar los componentes correctamente", () => {
    expect(wrapper.find(".container").exists()).toBe(true);
    expect(wrapper.find(".title-d").text()).toBe("Photos");
  });

  it("mostrar la data que se obtiene de por el album", async () => {
    
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockuppedDataPhotos),
      })
    );
    await wrapper.vm.getAlbumById(1);
    expect(wrapper.vm.album).toEqual([]);
    expect(wrapper.find(".subtitle-b").text()).toBe("");
  });

  it("buscar las fotos y renderizarlas", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockuppedDataPhotos),
      })
    );

    await wrapper.vm.getPhotoByAlbumId(1);
    expect(wrapper.vm.photos.length).toBeGreaterThan(0);
    const photoCards = wrapper.findAll(".card-text");
    
  });

  it("renderizar las fotos correctamente", async () => {
    const mockPhotos = [
        {
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "url": "https://via.placeholder.com/600/92c952",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        }
    ];
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockPhotos),
      })
    );

    await wrapper.vm.getPhotoByAlbumId(1);
    const photoLink = wrapper.find(".lnk-rel");
    expect(photoLink.attributes("href")).toBe("https://via.placeholder.com/600/92c952");
  });
});