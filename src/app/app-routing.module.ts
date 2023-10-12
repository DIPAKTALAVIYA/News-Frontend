import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StoryListComponent } from './components/story-list/story-list.component';

const routes: Routes = [
  {
    path:'',
    component:StoryListComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'story',
    component:StoryListComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
