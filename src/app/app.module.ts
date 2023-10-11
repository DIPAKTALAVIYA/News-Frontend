import { NgModule, NO_ERRORS_SCHEMA, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptor/loader.interceptor';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoaderComponent } from './components/loader/loader.component';
import { StoryListComponent } from './components/story-list/story-list.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
    StoryListComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatFormFieldModule, 
    MatInputModule,
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [LoaderService,{provide:HTTP_INTERCEPTORS, useClass:LoaderInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
