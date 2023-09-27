import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { SportsComponent } from './forms/sports/sports.component';
import { RouterOutlet } from '@angular/router';
import { GroceryComponent } from './forms/grocery/grocery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    HeaderComponent,
    SportsComponent,
    RouterOutlet,
    GroceryComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}

