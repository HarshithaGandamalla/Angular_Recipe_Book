import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

    @ViewChild('nameInput')  nameInput: ElementRef;
    @ViewChild('amountInput')  amountInput: ElementRef;
    @Output() onAdd = new EventEmitter<Ingredient>();   
    

  constructor() { }

  ngOnInit() {
  }

    onAddToShoppingList(event:any){
        event.preventDefault();
        const name=this.nameInput.nativeElement.value;
        const amount=this.amountInput.nativeElement.value;
        const newIngredient=new Ingredient(name,amount);
        this.onAdd.emit(newIngredient);
    }
}
