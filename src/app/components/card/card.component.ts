import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SpecialDirective } from 'src/app/directives/special.directive';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule,MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule,SpecialDirective],
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

  // isDisabledTrue = true;
  // isLikeDisabled = false;
  likeCount: number = 0;
  imageUrl: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  size: string = '1.2 rem';
  style: string = 'font-size: 1.2rem; color: cornflowerblue;';
  server: {id: number, status: string} = {id: 10, status: 'offline'};
  getServerStatus(): string {
    return this.server.status;
  }
  isLikeDisabled: boolean = false;
  isShareDisabled: boolean = true;
  onLike(): number {
    return this.likeCount++;
  }
}
