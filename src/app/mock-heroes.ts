import { Hero } from './heroes/hero.model';

//Criando uma lista de Heroes
//Constante do tipo Array
//Export antes de const, para poder importar esse arquivo em qlq lugar do projeto.
export const HEROES: Hero[] = [
  { id: 1, name: 'Wolverine' },
  { id: 2, name: 'Batman' },
  { id: 3, name: 'Homem Aranha' },
  { id: 4, name: 'Mulher Maravilha' },
  { id: 5, name: 'Pantera Negra' },
  { id: 6, name: 'Mulher Gato' },
  { id: 7, name: 'Superman' },
  { id: 8, name: 'Hulk' },
  { id: 9, name: 'Homem de Ferro' },
  { id: 10, name: 'Capitão América' },
];
