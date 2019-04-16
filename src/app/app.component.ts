import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public numbers: number[] = [1, 2, 3, 4, 5];
  public oddNumbers: number[] = [1, 3, 5];
  public onlyOdd: boolean = false;
}
