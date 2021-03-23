import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedItem : string = 'recipe';

  selectedView(value: string){

    this.selectedItem = value;
  }
}
