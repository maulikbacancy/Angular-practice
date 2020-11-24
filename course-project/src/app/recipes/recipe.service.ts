import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipes } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipes>();

  constructor(private shoppingListService: ShoppingListService) { }

  private recipes: Recipes[] = [
    new Recipes(
      'test-recipe',
      'this is recipe description',
      'https://hips.hearstapps.com/delish/assets/17/39/1506456246-delish-healthy-chicken-casserole-1.jpg',
      [new Ingredient('ing1', 1), new Ingredient('ing2', 2)]),

    new Recipes(
      'Second-test-recipe',
      'this is second-recipe description',
      'https://hips.hearstapps.com/delish/assets/17/39/1506456246-delish-healthy-chicken-casserole-1.jpg',
      [new Ingredient('ing3', 3), new Ingredient('ing4', 4)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
