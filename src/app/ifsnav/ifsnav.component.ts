import { Component, ViewChild} from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav } from '../../../node_modules/@angular/material';

@Component({
  selector: 'ifsnav',
  templateUrl: './ifsnav.component.html',
  styleUrls: ['./ifsnav.component.css']
})

export class IFSNavComponent {
@ViewChild('sidenav') sidenav: MatSidenav;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    isTablet$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Tablet)
    .pipe(
      map(result => result.matches)
    );
    isNavHideSize$: Observable<boolean> = this.breakpointObserver.observe('(max-width:950px)')
    .pipe(
      map(result => result.matches)
    );
  constructor(private breakpointObserver: BreakpointObserver) {}

  }
