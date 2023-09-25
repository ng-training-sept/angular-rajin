import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, MatInputModule,FormsModule,MatFormFieldModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  username:string = " ";
  style : string = "font-size : 12px; backgroundColor: red; color: white";
  validName(){
    if(this.username == " "){
      this.style = "font-size : 12px; backgroundColor: red; color: white";
      return true;
    }
    this.style = "font-size : 12px; backgroundColor: green; color: white"
    return false;
  }
  reset(){
    this.username = "";
  }
  

}
