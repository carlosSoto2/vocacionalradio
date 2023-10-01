import { Directive, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Directive({
  selector: '[appLoader]'
})
export class LoaderDirective {

  constructor(private router: Router, private elementRef: ElementRef) {
    
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // setTimeout(() => {
        //   this.elementRef.nativeElement.style.display = 'block';
        // }, 0);
      });
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.elementRef.nativeElement.style.display = 'none';
    // }, 1000);
  }

}
