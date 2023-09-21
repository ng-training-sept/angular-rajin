import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  name: string = "Rajin";
  contact:number = 9845421136;
  profile = {
    name:{
      fname: 'Rajin',
      lname: 'Maharjan'
    },
    age:36
  }
  title: string = 'Data Binding';
  port: number = 4200;

  isDisabledTrue = true;
  isLikeDisabled = false;
  onLike(): void {
    alert('You liked Shiba!')
  }
}
