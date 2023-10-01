import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements-box8',
  templateUrl: './elements-box8.component.html',
  styleUrls: ['./elements-box8.component.css']
})
export class ElementsBox8Component implements OnInit {

  @Input() data: any;
  @Input() detail: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
