import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-similar-projects2',
  templateUrl: './section-similar-projects2.component.html',
  styleUrls: ['./section-similar-projects2.component.css']
})
export class SectionSimilarProjects2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
