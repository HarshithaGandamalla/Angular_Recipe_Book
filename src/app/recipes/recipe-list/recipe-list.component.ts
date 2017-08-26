import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected =new EventEmitter<Recipe>();
  //recipe=[]; --without added type of Recipe array
   recipes:Recipe[] = [
    new Recipe('A test recipe','yum','https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Wikimedia-logo.svg/900px-Wikimedia-logo.svg.png')
    ,new Recipe('A test recipe2','yum','https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Wikimedia-logo.svg/900px-Wikimedia-logo.svg.png')
  ];

   constructor(){

   }


     ngOnInit() {
     }
    
    onRecipeSelected(recipe: Recipe)
    {
        this.recipeWasSelected.emit(recipe);
    }

}
