import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var jQuery: any;
declare var initializeOnReady: any;
declare var initializeOnLoad: any;



declare function customInitFunctions():void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Vocacional Radio';

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.router.events
    .pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    )
    .subscribe(event => {
      this.reinitializeThings();
    });

    customInitFunctions()
  }

  reinitializeThings() {
    console.log("reinitializeThings");
    (function ($) {
      setTimeout(function () {
        initializeOnLoad();
        initializeOnReady();
      }, 500);
    })(jQuery);
  }
}
