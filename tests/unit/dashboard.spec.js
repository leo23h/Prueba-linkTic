// FILE: src/views/test_dashboard.vue
import { shallowMount } from "@vue/test-utils";
import DashboardMain from "@/views/dashboard.vue";

const mockedDataUser = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
];

const mockedDataAlbums = [
  {
    "userId": 1,
    "id": 1,
    "title": "quidem molestiae enim"
  }
];

const mockedDataPosts = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
]

// Mock global fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  })
);

describe("DashboardMain.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(DashboardMain, {
      mocks: {
        $router: {
          push: jest.fn(),
        },
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("rendetizar los componentes correctamente", () => {
    expect(wrapper.find(".container").exists()).toBe(true);
    expect(wrapper.find(".title-d").text()).toBe("Dashboard");
  });

  it("como debe ser correcta la data a devolver", () => {
    expect(typeof wrapper.vm.userConts).toBe("number");
    expect(typeof wrapper.vm.postConts).toBe("number");
    expect(typeof wrapper.vm.albumsCont).toBe("number");
    expect(wrapper.vm.users).toEqual([]);
  });

  it("todos los usuarios son cargados", () => {
    const getUsersSpy = jest.spyOn(wrapper.vm, "getUsers");
    wrapper.vm.$options.mounted[0].call(wrapper.vm);
    expect(getUsersSpy).toHaveBeenCalled();
  });

  it("llamar todos los post son cargados", () => {
    const getPostsSpy = jest.spyOn(wrapper.vm, "getPosts");
    wrapper.vm.$options.mounted[0].call(wrapper.vm);
    expect(getPostsSpy).toHaveBeenCalled();
  });

  it("llamar a todos los albumes", () => {
    const getAlbumsSpy = jest.spyOn(wrapper.vm, "getAlbums");
    wrapper.vm.$options.mounted[0].call(wrapper.vm);
    expect(getAlbumsSpy).toHaveBeenCalled();
  });

  it("la vista album este navegando en la ruta correcta", () => {
    const item = { id: 1 };
    wrapper.vm.viewAlbums(item);
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith({
      name: "album",
      params: { idUser: item.id },
    });
  });

  it("la vista de post este navegando en la ruta correcta", () => {
    const item = { id: 1 };
    wrapper.vm.viewPosts(item);
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith({
      name: "post",
      params: { idUser: item.id },
    });
  });

  it("obtener los usuarios y los contadores ", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve(mockedDataUser),
      })
    );
    await wrapper.vm.getUsers();
    expect(typeof wrapper.vm.userConts).toBe("number");
  });

  it("obtener los post y los contadores del dash", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockedDataPosts),
      })
    );
    await wrapper.vm.getPosts();
    expect(typeof wrapper.vm.postConts).toBe("number");
  });

  it("obtener los albumes y los contadores", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockedDataAlbums),
      })
    );
    await wrapper.vm.getAlbums();
    expect(typeof wrapper.vm.albumsCont).toBe("number");
  });
});