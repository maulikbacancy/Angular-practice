import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipes } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private shoppingListService: ShoppingListService) { }

  private recipes: Recipes[] = [
    new Recipes(
      1,
      'test-recipe',
      'this is recipe description',
      'https://hips.hearstapps.com/delish/assets/17/39/1506456246-delish-healthy-chicken-casserole-1.jpg',
      [new Ingredient('ing1', 1), new Ingredient('ing2', 2)]),

    new Recipes(
      2,
      'Second-test-recipe',
      'this is second-recipe description',
      'https://hips.hearstapps.com/delish/assets/17/39/1506456246-delish-healthy-chicken-casserole-1.jpg',
      [new Ingredient('ing3', 3), new Ingredient('ing4', 4)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipesById(id: number) {
    const recipe = this.recipes.find(
      (s) => {
        return s.id === id;
      }
    );
    return recipe;
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
