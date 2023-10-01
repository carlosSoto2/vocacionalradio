import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-projects4',
  templateUrl: './section-projects4.component.html',
  styleUrls: ['./section-projects4.component.css']
})
export class SectionProjects4Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
