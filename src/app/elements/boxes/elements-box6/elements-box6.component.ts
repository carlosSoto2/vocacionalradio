import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements-box6',
  templateUrl: './elements-box6.component.html',
  styleUrls: ['./elements-box6.component.css']
})
export class ElementsBox6Component implements OnInit {

  @Input() data: any;
  @Input() shadow: any;
  @Input() gap: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
