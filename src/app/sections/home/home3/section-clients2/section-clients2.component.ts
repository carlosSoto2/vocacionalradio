import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-clients2',
  templateUrl: './section-clients2.component.html',
  styleUrls: ['./section-clients2.component.css']
})
export class SectionClients2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
