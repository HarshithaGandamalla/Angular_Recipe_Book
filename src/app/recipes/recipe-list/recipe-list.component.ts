import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  //recipe=[]; --without added type of Recipe array
  recipes:Recipe[] = [
    new Recipe('A test recipe','yum','https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Wikimedia-logo.svg/900px-Wikimedia-logo.svg.png')
    ,new Recipe('A test recipe','yum','https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Wikimedia-logo.svg/900px-Wikimedia-logo.svg.png')
  ];

   constructor(){

   }


     ngOnInit() {
     }

}
