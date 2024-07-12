export class MenuModel {
  name: string = '';
  icon: string = '';
  url: string = '';
  isTitle: boolean = false;
  subMenu: MenuModel[] = [];
}

export const Menus: MenuModel[] = [
  {
    name: 'Ana Sayfa',
    icon: 'fas fa-solid fa-home',
    url: '/',
    isTitle: false,
    subMenu: [],
  },
  {
    name: 'Ana Grup',
    icon: 'far fa-solid fa-trowel-bricks',
    url: '',
    isTitle: false,
    subMenu: [
      {
        name: 'Müşteriler',
        icon: 'far fa-solid fa-users',
        url: '/customers',
        isTitle: false,
        subMenu: [],
      },
    ],
  },
];
