import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  property: any ={
  "Id": 1,
  "Type" : "House",
  "Price" : 2000

  }

  getName() {

    return 'shahid';
  }


}
