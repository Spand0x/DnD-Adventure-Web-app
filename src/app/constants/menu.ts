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
      label: 'menu.modifier',
      to: '/create/modifier'
    },
      {
        icon: 'simple-icon-briefcase',
        label: 'menu.race',
        to: '/create/race'
      },
      {
        icon: 'simple-icon-briefcase',
        label: 'menu.actions',
        to: '/create/action',
        subs: [
          {
            icon: 'simple-icon-briefcase',
            label: 'menu.attack',
            to: '/create/action/attack'
          },
          {
            icon: 'simple-icon-briefcase',
            label: 'menu.spell',
            to: '/create/action/spell'
          },
          {
            icon: 'simple-icon-briefcase',
            label: 'menu.action',
            to: '/create/action/action'
          },
          {
            icon: 'simple-icon-briefcase',
            label: 'menu.bonus-action',
            to: '/create/action/bonus'
          },
          {
            icon: 'simple-icon-briefcase',
            label: 'menu.other',
            to: '/create/action/other'
          }
        ]
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
