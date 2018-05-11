import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/cocktail.model';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {

  public cocktails: Cocktail[] = [
    new Cocktail("Pisco Sour"),
    new Cocktail("Mojito"),
    new Cocktail("Martini"),
    new Cocktail("Margarita")
  ];

  constructor() { }

  ngOnInit() {
  }

}
