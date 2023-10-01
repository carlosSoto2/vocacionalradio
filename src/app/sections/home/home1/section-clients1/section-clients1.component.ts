import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-clients1',
  templateUrl: './section-clients1.component.html',
  styleUrls: ['./section-clients1.component.css']
})
export class SectionClients1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
