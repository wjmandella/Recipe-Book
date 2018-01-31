import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
	ingredientsChanged = new EventEmitter<Ingredient[]>();
	private ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Tomatoes', 10)
	];

  constructor() { }

  getIngredients() {
  	return this.ingredients.slice();  	
  }

  addIngredient(ingredient: Ingredient) {
  	this.ingredients.push(ingredient);
  	this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
  	// for (let ingredient of ingredients) {
  	// 	this.addIngredient(ingredient);
  	// } 
    //[NOTE: This approach potentially 
  	//    does a lot of "event emissions", so it is not ideal.]
  	this.ingredients.push(...ingredients);
  	this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
