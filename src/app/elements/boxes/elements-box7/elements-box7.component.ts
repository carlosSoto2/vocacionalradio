import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements-box7',
  templateUrl: './elements-box7.component.html',
  styleUrls: ['./elements-box7.component.css']
})
export class ElementsBox7Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
