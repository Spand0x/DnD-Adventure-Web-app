import {CharacterBaseInfo} from './character-base-info.model';

export class User {
  uuid: string;
  username: string;
  email: string;
  // userRoles: Role[]
  characters: CharacterBaseInfo[];
  // campaigns: Campaign;

}
