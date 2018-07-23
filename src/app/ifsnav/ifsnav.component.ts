import { Component, ViewChild} from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatDrawerContainer, MatDrawer, MatSidenavContainer, MatDrawerToggleResult} from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav } from '../../../node_modules/@angular/material';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ifsnav',
  templateUrl: './ifsnav.component.html',
  styleUrls: ['./ifsnav.component.css']
})

export class IFSNavComponent {
@ViewChild('sidenav') sidenav: MatSidenav;
@ViewChild('drawer') drawer:MatDrawer;
@ViewChild('drawercontainer') drawercontainer:MatDrawerContainer;

public get isDrawerOpen():boolean{
  return this.drawer.opened;
}
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
    
  constructor(private breakpointObserver: BreakpointObserver, iconRegistry : MatIconRegistry, sanitizer : DomSanitizer) {
    iconRegistry.addSvgIcon(
      'menu-expand',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/expand-menu.svg'));
      iconRegistry.addSvgIcon(
        'menu-collapse',
        sanitizer.bypassSecurityTrustResourceUrl('../../assets/collapse-menu.svg'));
  }
}
