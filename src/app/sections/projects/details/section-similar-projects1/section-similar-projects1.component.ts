import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-similar-projects1',
  templateUrl: './section-similar-projects1.component.html',
  styleUrls: ['./section-similar-projects1.component.css']
})
export class SectionSimilarProjects1Component implements OnInit {

  @Input() data: any; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
