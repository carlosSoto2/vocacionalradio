import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-projects3',
  templateUrl: './section-projects3.component.html',
  styleUrls: ['./section-projects3.component.css']
})
export class SectionProjects3Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
