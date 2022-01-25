import { Hero } from './hero.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes', //Pegando a propriedade 'hero 'e aplicando no nosso Template.
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
