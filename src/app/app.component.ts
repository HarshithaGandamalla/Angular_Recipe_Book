import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{  
    inView = 'recipe';
    onNavigate(selectedModule: string)
    {
        if(selectedModule === 'shopping-list')
            this.inView ='shopping-list';
        if(selectedModule === 'recipe')
            this.inView ='recipe';

        
    }
}
