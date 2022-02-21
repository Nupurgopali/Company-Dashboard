import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements AfterViewInit {

  sideBarOpen=true;
  
  @ViewChild(MatDrawer)
  sidenav!: MatDrawer;
 
   constructor(private observer: BreakpointObserver) {}
 
   ngAfterViewInit() {
     this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
       if (res.matches) {
         this.sidenav.mode = 'over';
         this.sidenav.close();
       } else {
         this.sidenav.mode = 'side';
         this.sidenav.open();
       }
     });
   }
  sideBarToggler()
  {
    this.sideBarOpen=!this.sideBarOpen;
  }
}
