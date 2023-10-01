import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-team2',
  templateUrl: './section-team2.component.html',
  styleUrls: ['./section-team2.component.css']
})
export class SectionTeam2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
