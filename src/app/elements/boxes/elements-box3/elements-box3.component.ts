import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements-box3',
  templateUrl: './elements-box3.component.html',
  styleUrls: ['./elements-box3.component.css']
})
export class ElementsBox3Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
