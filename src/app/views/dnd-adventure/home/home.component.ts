import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../shared/services/auth.service';
import {CharacterBaseInfo} from '../../../shared/models/character-base-info.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading = false;
  hasCharacters = false;
  characters: CharacterBaseInfo[] = [];

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    if (this.authService.user.characters.length === 0) {
      this.hasCharacters = false;
      this.isLoading = false;
    } else {
      this.hasCharacters = true;
      this.characters = this.authService.user.characters;
    }
  }


}
