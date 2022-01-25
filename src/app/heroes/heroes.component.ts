import { Component } from '@angular/core';

import { HEROES } from './../mock-heroes';
import { Hero } from './hero.model';

@Component({
  selector: 'app-heroes', //Pegando a propriedade 'hero 'e aplicando no nosso Template.
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  //Propriedade
  //hero = 'Wolverine';

  //Mudando a estrutura
  //Importando do hero.models.ts
  //Abrindo {} e colocando as propriedade, no caso id e name
  //Definimos uma propriedade com uma interface chamada Hero, com uma id: numer e name: string.
  hero: Hero = {
    id: 1,
    name: 'Wolverine',
  };

  heroes = HEROES;
  selectedHero?: Hero; //seletecdHero vai poder ser tipo Hero ou undefined.

  //Método (onSelect) terá que ter algum parâmentro (hero: Hero)ou não,
  //e um tipo de retorno, no caso aqui foi 'void'.
  onSelect(hero: Hero): void {
    //Acessando o selectHero, usando o this (No contexto da nossa classe)
    this.selectedHero = hero;
  }
}
