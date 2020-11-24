import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientChanged = new EventEmitter<Ingredient[]> ();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 20)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  onAddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for(let ingredient of ingredients){
    //   this.ingredients.push(ingredient);
    // }

    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
  constructor() { }
}
