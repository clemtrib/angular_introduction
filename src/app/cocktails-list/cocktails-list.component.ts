import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/cocktail.model';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {

  public cocktails: Cocktail[] = [
    new Cocktail(
      "Pisco Sour",
      "https://image.afcdn.com/recipe/20141026/33195_w420h344c1cx317cy157.jpg",
      "Le Pisco sour est un cocktail typique de la cuisine sud-américaine. Le nom de cette boisson provient à la fois du Pisco, l'alcool utilisé et sour, mot anglais en référence à l'amertume du jus de citron et des composants édulcorants du cocktail."
    ),
    new Cocktail(
      "Piña colada",
      "https://image.afcdn.com/recipe/20131025/48778_w420h344c1cx1181cy1771.jpg",
      "La piña colada est un cocktail à base de rhum, de jus d'ananas et de crème de coco."
    ),
    new Cocktail(
      "Mojito",
      "https://static.cuisineaz.com/610x610/i14978-recette-de-mojito.jpeg",
      "Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche."
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
