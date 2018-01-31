import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service'; 

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe [] = [
		new Recipe('Tasty Schnitzel', 'A super, tasty schnitzel!', 
			'https://upload.wikimedia.org/wikipedia/commons/4/40/Wiener_Schnitzel.jpg',
        [new Ingredient('Meat', 1),
         new Ingredient('French Fries', 20)]),
	new Recipe('Big Fat Burger', 'American style food', 
      'https://static.pexels.com/photos/161519/abstract-barbecue-barbeque-bbq-161519.jpeg',
        [new Ingredient('Buns',2), new Ingredient('Meat',1), new Ingredient('Cheese slices', 1)])
  ];

  constructor(private shoppingListSvc: ShoppingListService) { }

  getRecipes() {
  	// return this.recipes.slice();
    return this.recipes;
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.shoppingListSvc.addIngredients(ingredients);
  }

}
