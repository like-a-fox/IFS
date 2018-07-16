import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SlideshowModule } from 'ng-simple-slideshow';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IFSNavComponent } from './ifsnav/ifsnav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatExpansionModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { IFSDashboardComponent } from './ifsdashboard/ifsdashboard.component';
import { IFSTableComponent } from './ifstable/ifstable.component';
import { TheTeamComponent } from './the-team/the-team.component';
import { ConcreteSurfacingComponent } from './concrete-surfacing/concrete-surfacing.component';
import { ContactComponent} from './contact/contact.component';
import { IfsServicesComponent } from './ifs-services/ifs-services.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'the-team', component: TheTeamComponent },
  { path: 'ifs-services', component: IfsServicesComponent },
  { path: 'concrete-surfacing', component: ConcreteSurfacingComponent },
  { path: 'contact', component: ContactComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    IFSNavComponent,
    IFSDashboardComponent,
    IFSTableComponent,
    TheTeamComponent,
    ConcreteSurfacingComponent,
    ContactComponent,
    IfsServicesComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    MatExpansionModule,
    SlideshowModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
