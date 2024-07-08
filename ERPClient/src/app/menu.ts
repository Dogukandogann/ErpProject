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
];
