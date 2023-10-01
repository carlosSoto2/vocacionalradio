import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-blog-single',
  templateUrl: './section-blog-single.component.html',
  styleUrls: ['./section-blog-single.component.css']
})
export class SectionBlogSingleComponent implements OnInit {

  @Input() data: any;
  @Input() withSidebar: any;

  constructor() { }

  ngOnInit(): void {
  }

}
