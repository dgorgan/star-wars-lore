import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSerializer } from '@angular/router';
import { Location } from '@angular/common';

import { Character }         from '../character';
import { CharactersService }  from '../characters.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character: any;
  // characterImg: any;

  constructor(
    private charactersService: CharactersService,
    private urlSerializer: UrlSerializer,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');

    this.charactersService.getCharacters()
        .subscribe(data => {
          data.forEach(character => {
            if (character.name === name) {
              this.character = character;
              // this.characterImg = this.urlSerializer.parse(character.name);
            }
          });
        });
  }

  goBack(): void {
    this.location.back();
  }

}
