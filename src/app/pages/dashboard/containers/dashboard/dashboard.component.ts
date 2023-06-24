import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit, AfterViewChecked {

  @ViewChild(MatSidenav, { static: true }) sidenav: MatSidenav;

  constructor(private observer: BreakpointObserver, private cd: ChangeDetectorRef) { }


  ngAfterViewInit(): void {
    this.observer.observe(['(max-width : 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  ngAfterViewChecked(): void {
    this.cd.detectChanges();
  }

}

