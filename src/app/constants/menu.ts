export interface IMenuItem {
  id?: string;
  icon?: string;
  label: string;
  to: string;
  newWindow?: boolean;
  subs?: IMenuItem[];
}

const data: IMenuItem[] = [
  {
    id: 'home',
    icon: 'iconsminds-air-balloon-1',
    label: 'menu.home',
    to: '/home'
  },
  {
    id: 'create-character',
    icon: 'iconsminds-three-arrow-fork',
    label: 'menu.create-character',
    to: '/create-character',
  },
  {
    id: 'create',
    icon: 'iconsminds-bucket',
    label: 'menu.create',
    to: '/create',
    subs: [{
      icon: 'simple-icon-briefcase',
      label: 'menu.create-modifier',
      to: '/create/modifier'
    },
      {
        icon: 'simple-icon-briefcase',
        label: 'menu.create-race',
        to: '/create/race'
      }
    ]
  },
  {
    id: 'docs',
    icon: 'iconsminds-library',
    label: 'menu.docs',
    to: 'https://vien-docs.coloredstrategies.com/',
    newWindow: true
  }
];
export default data;
