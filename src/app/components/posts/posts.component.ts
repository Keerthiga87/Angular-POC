import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts/posts.service';
import { POSTS_META } from '../../meta/posts.meta';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  private posts: Array<Object> = [];
  private POSTS_FIELDS_CONFIG: Array<Object> = [];
  private isSuccessResponse=true;
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    //dynamic table column configuration
    this.POSTS_FIELDS_CONFIG = POSTS_META;
    this.getAllPosts();
  }

  /**
  * Retrieve postal data list
  * @param none
  * @returns none
  */
  getAllPosts() {
    this.postsService.getAllPosts().subscribe((posts: Array<Object>) => {
      this.posts = posts;
      this.isSuccessResponse=true;
    },error=>{
      this.isSuccessResponse=false;
    })
  }

}
