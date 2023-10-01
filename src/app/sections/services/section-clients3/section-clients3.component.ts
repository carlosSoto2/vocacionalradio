import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-clients3',
  templateUrl: './section-clients3.component.html',
  styleUrls: ['./section-clients3.component.css']
})
export class SectionClients3Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
