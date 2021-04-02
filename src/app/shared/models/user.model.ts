import {CharacterBaseInfo} from './character-base-info.model';

export class User {
  uuid: string;
  username: string;
  email: string;
  roles: string[];
  characters: CharacterBaseInfo[];
  // campaigns: Campaign;

}
