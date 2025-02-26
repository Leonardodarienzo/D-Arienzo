import { Component } from '@angular/core';
import { TerzoComponent } from './terzo/terzo.component';
import { SecondoComponent} from './secondo/secondo.component';
import { QuartoComponent } from './quarto/quarto.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'darienzo-leonardo-filab';
  burzum: string = "app";
}
