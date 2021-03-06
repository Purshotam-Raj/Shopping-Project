import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('First Recipe', 'This is First recipe', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872'),
    new Recipe('Second Recipe', 'This is Second recipe', 'https://st3.depositphotos.com/13324256/17303/i/1600/depositphotos_173034766-stock-photo-woman-writing-down-recipe.jpg')
  
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onSelected(recipeEl: Recipe){
    this.selectedRecipe.emit(recipeEl);

  }

}
