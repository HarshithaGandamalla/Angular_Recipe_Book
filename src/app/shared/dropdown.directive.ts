import {Directive,HostListener ,HostBinding} from '@angular/core';

@Directive({
    selector:'[appDropdown]'
})

export class DropdownDirective{

    @HostBinding('class.open') adddrop:boolean = false;
 
    @HostListener('click') onDropDown(){
     
        this.adddrop=!this.adddrop;
    }
    
}