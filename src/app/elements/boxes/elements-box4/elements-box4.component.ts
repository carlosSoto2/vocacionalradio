import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements-box4',
  templateUrl: './elements-box4.component.html',
  styleUrls: ['./elements-box4.component.css']
})
export class ElementsBox4Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
