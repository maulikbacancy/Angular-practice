import { Injectable } from '@angular/core';
import { Recipes } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipes[] = [
    new Recipes('test-recipe','this is recipe description','https://hips.hearstapps.com/delish/assets/17/39/1506456246-delish-healthy-chicken-casserole-1.jpg'),
    new Recipes('Second-test-recipe','this is second-recipe description','https://hips.hearstapps.com/delish/assets/17/39/1506456246-delish-healthy-chicken-casserole-1.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
  constructor() { }
}
