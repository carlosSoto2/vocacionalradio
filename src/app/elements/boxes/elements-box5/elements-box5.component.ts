import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements-box5',
  templateUrl: './elements-box5.component.html',
  styleUrls: ['./elements-box5.component.css']
})
export class ElementsBox5Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
