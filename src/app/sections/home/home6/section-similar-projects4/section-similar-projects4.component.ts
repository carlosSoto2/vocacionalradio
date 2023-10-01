import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-similar-projects4',
  templateUrl: './section-similar-projects4.component.html',
  styleUrls: ['./section-similar-projects4.component.css']
})
export class SectionSimilarProjects4Component implements OnInit {
 
  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
