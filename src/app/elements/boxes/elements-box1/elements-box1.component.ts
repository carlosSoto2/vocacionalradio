import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements-box1',
  templateUrl: './elements-box1.component.html',
  styleUrls: ['./elements-box1.component.css']
})
export class ElementsBox1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
