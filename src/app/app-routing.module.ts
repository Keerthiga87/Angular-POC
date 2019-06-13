import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import { PostsComponent } from './components/posts/posts.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';


const routes: Routes = [
    {
        path: 'users', component: UsersComponent
    },
    {
        path: 'users/:userId', component: UserDetailsComponent
    },
    {
        path: 'posts', component: PostsComponent
    },
    {
        path: '', redirectTo: 'users', pathMatch: 'full'
    },
    {
        path: '**', component: PageNotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
