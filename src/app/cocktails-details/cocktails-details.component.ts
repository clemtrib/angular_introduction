import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/cocktail.model';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.css']
})
export class CocktailsDetailsComponent implements OnInit {


  cocktail = new Cocktail(
    "Pisco Sour",
    "https://image.afcdn.com/recipe/20141026/33195_w420h344c1cx317cy157.jpg",
    "Le Pisco sour est un cocktail typique de la cuisine sud-américaine. Le nom de cette boisson provient à la fois du Pisco, l'alcool utilisé et sour, mot anglais en référence à l'amertume du jus de citron et des composants édulcorants du cocktail."
  );

  constructor() { }

  ngOnInit() {
  }

}
