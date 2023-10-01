import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements-box10',
  templateUrl: './elements-box10.component.html',
  styleUrls: ['./elements-box10.component.css']
})
export class ElementsBox10Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
