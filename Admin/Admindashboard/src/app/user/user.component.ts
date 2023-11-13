import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  

  headers=['Name', 'Stock', 'Price', 'Brand', 'Add']

  rows=[{
    'Name':'Chips',
    'Stock':2,
    'Price':100,
    'Brand':'TipiTip'
  },
  {
    'Name':'Chips',
    'Stock':2,
    'Price':100,
    'Brand':'TipiTip'
  },
  {
    'Name':'Chips',
    'Stock':2,
    'Price':100,
    'Brand':'TipiTip'
  }
]


}
