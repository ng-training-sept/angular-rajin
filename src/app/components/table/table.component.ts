import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  user = [
    {
      username: "Rajin Maharjan",
      address: "Kathmandu",
      age: 22
    },
    {
      username: "Milan Maharjan",
      address: "Bhaktapur",
      age: 23
    },
    {
      username: "Gagan Maharjan",
      address: "Lalitpur",
      age: 17
    },
    {
      username: "Palpasha Manandhar",
      address: "Butwal",
      age: 19
    },
    {
      username: "Suzina Maharjan",
      address: "Pokhara",
      age: 21
    },
    {
      username: "Rabin Maharjan",
      address: "Chitwan",
      age: 28
    },
  ];

}
