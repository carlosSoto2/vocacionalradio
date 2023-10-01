import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements-box2',
  templateUrl: './elements-box2.component.html',
  styleUrls: ['./elements-box2.component.css']
})
export class ElementsBox2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
