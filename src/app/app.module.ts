import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ListsComponent } from './components/shared/lists/lists.component';
import { CreatePostComponent } from './components/create-post/create-post.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    UsersComponent,
    PageNotFoundComponent,
    UserDetailsComponent,
    ListsComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
