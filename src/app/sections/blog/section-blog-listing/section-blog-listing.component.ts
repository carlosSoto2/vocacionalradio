import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-blog-listing',
  templateUrl: './section-blog-listing.component.html',
  styleUrls: ['./section-blog-listing.component.css']
})
export class SectionBlogListingComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
