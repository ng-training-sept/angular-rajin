import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  // Sharing data between child and parent components

  @Input({required:true}) titles: string[] = [];
  @Output() titleEvent$ = new EventEmitter<string>();

  onAddCard(title: string): void {
    this.titleEvent$.emit(title);
  }

  onDeleteCard(title:string):void{
    const index:number = this.titles.indexOf(title);
    this.titles.splice(index,1);
  }
}
