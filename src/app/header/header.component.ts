import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() headerModule=new EventEmitter<string>();  
    
  constructor() { }

  ngOnInit() {
  }
    
  onSelect(selected: string){
        
      this.headerModule.emit(selected);  
      //console.log("event fired with "+selected);
    }

}
