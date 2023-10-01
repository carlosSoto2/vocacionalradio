import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements-box9',
  templateUrl: './elements-box9.component.html',
  styleUrls: ['./elements-box9.component.css']
})
export class ElementsBox9Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
