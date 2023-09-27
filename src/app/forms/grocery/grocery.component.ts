import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'src/app/components/card/card.model';
import { CardComponent } from 'src/app/components/card/card.component';

@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.scss']
})
export class GroceryComponent implements OnInit{

  groceryCard!:Card[];
  ngOnInit(): void {
    this.groceryCard = [
      {
        id: '1',
        name: 'Doritos',
        price: 300,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlh6lQDwQkBzlC4B6hZ2sQL-n_gPTXjfCQcg&usqp=CAU',
        description: 'Doritos description'
      },
      {
        id: 'id2',
        name: ' Buldak',
        price: 1000,
        imageUrl: 'https://m.media-amazon.com/images/I/71tEyNybt5L._AC_UF1000,1000_QL80_.jpg',
        description: 'Buldak description'
      }
    ]
  }

}
