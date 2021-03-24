import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit{

  @ViewChild('nameinput') name : ElementRef = new ElementRef(null);
  @ViewChild('amountinput') amount : ElementRef = new ElementRef(null);
  @Output() ingredientItem = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }
  onAddList(){
    const ingName = this.name.nativeElement.value;
    const ingAmount = this.amount.nativeElement.value;
    const ingredientItem = new Ingredient(ingName,ingAmount);
    this.ingredientItem.emit(ingredientItem);

  }

}
