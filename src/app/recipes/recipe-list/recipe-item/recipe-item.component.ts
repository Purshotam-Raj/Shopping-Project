import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  
  // @Input() recipeName: string='';
  // @Input() recipeDescription: string='';
  // @Input() recipeImagePath: string='';
  @Input() recipe:Recipe =new Recipe('','','');

  @Output() recipeDetail = new EventEmitter<void>();

  constructor() {
   }

  ngOnInit(): void {
  }
  onRecipeItem(){
    this.recipeDetail.emit();

  }

}
