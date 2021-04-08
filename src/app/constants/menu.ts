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
    icon: 'iconsminds-doctor',
    label: 'menu.characters',
    to: '/home'
  },
  {
    id: 'create-character',
    icon: 'iconsminds-add-user',
    label: 'menu.create-character',
    to: '/create/character',
  },
  {
    id: 'create',
    icon: 'simple-icon-pencil',
    label: 'menu.create',
    to: '/create',
    subs: [{
      icon: 'simple-icon-plus',
      label: 'menu.modifier',
      to: '/create/modifier'
    },
      {
        icon: 'iconsminds-paw',
        label: 'menu.race',
        to: '/create/race'
      },
      // {
      //   icon: 'simple-icon-briefcase',
      //   label: 'menu.action',
      //   to: '/create/action/action'
      // },
      // {
      //   icon: 'simple-icon-briefcase',
      //   label: 'menu.bonus-action',
      //   to: '/create/action/bonus'
      // },
      // {
      //   icon: 'simple-icon-briefcase',
      //   label: 'menu.other',
      //   to: '/create/action/other'
      // }
      {
        icon: 'simple-icon-ghost',
        label: 'menu.class',
        to: '/create/class'
      },
      {
        icon: 'simple-icon-fire',
        label: 'menu.spell',
        to: '/create/spell'
      },
      {
        icon: 'iconsminds-three-arrow-fork',
        label: 'menu.weapon',
        to: '/create/weapon'
      }
    ]
  },
  {
    id: 'users',
    icon: 'simple-icon-people',
    label: 'menu.users-management',
    to: '/users-management'
  },
  {
    id: 'list',
    icon: 'simple-icon-list',
    label: 'menu.list',
    to: '/list',
    subs: [{
      icon: 'simple-icon-plus',
      label: 'menu.modifiers',
      to: '/list/modifiers',
    }]
  }
];
export default data;
