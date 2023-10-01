import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-team1',
  templateUrl: './section-team1.component.html',
  styleUrls: ['./section-team1.component.css']
})
export class SectionTeam1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
