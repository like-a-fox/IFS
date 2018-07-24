//core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

//Design Modules
import { 
  MatExpansionModule,
  MatInputModule,
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
   } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { GalleryModule } from  '@ngx-gallery/core';
import { LightboxModule } from  '@ngx-gallery/lightbox';
import { GallerizeModule } from  '@ngx-gallery/gallerize';
import { NgxMasonryModule } from 'ngx-masonry';
import { SlideshowModule } from 'ng-simple-slideshow';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import 'mousetrap';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IFSNavComponent } from './ifsnav/ifsnav.component';
import { TheTeamComponent } from './the-team/the-team.component';
import { IfsServicesComponent } from './ifs-services/ifs-services.component';
import { ContactComponent} from './contact/contact.component';
import { IfsGalleryComponent } from './ifs-gallery/ifs-gallery.component';
import { FooterComponent } from './footer/footer.component';




const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'the-team', component: TheTeamComponent },
  { path: 'ifs-services', component: IfsServicesComponent },
  { path: 'ifs-gallery', component: IfsGalleryComponent },
  { path: 'contact', component: ContactComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    IFSNavComponent,
    TheTeamComponent,
    ContactComponent,
    IfsServicesComponent,
    HomeComponent,
    FooterComponent,
    IfsGalleryComponent
  ],
  imports: [
    FlexLayoutModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    CdkTableModule,
    CdkTreeModule,
    ReactiveFormsModule,
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
    NgxMasonryModule,
    GalleryModule.forRoot(),
    LightboxModule.forRoot(),
    GallerizeModule,
    RouterModule.forRoot(appRoutes),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
