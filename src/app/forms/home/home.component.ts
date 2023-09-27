import { Component, inject, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Card } from 'src/app/components/card/card.model';
import { CardComponent } from 'src/app/components/card/card.component';
import { HomeCard } from './home.model';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MatCardModule, ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 
  
  homeCard:HomeCard[] = [{
    id: '1',
    name: 'Doritos',
    price: 300,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlh6lQDwQkBzlC4B6hZ2sQL-n_gPTXjfCQcg&usqp=CAU',
    type:'Grocery'
  },
  {
    id: '2',
    name: ' Buldak',
    price: 1000,
    imageUrl: 'https://m.media-amazon.com/images/I/71tEyNybt5L._AC_UF1000,1000_QL80_.jpg',
    type: 'Grocery'
  },
  {
    id: '3',
    name: 'Football',
    price: 1500,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Football_Pallo_valmiina-cropped.jpg',
    type: 'Sports'
  },
  {
    id: '4',
    name: 'Football Boot',
    price: 6000,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/AdidasEtruscoBoot.jpg/230px-AdidasEtruscoBoot.jpg',
    type: 'Sports'
  }];

  
}
