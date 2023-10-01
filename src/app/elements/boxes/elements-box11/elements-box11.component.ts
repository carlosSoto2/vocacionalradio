import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements-box11',
  templateUrl: './elements-box11.component.html',
  styleUrls: ['./elements-box11.component.css']
})
export class ElementsBox11Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
