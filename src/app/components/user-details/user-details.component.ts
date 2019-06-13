import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

import { UsersService } from '../../services/users/users.service';
import { ActivatedRoute } from '@angular/router';
import {USERS_DETAILS_META} from  '../../meta/user-details.meta';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  private userDetails: Object;
  private USERS_DETAILS_Fields_Config:Array<Object>;
  private isSuccessResponse=true;

  constructor(private usersService: UsersService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    //dynamic fields configuration
    this.USERS_DETAILS_Fields_Config=USERS_DETAILS_META;
    this.getUserDetailsForUser();
  }

  /**
  * Retrieve User details based on user id
  * @param none
  * @returns none
  */
  getUserDetailsForUser() {
    const userId = +this.route.snapshot.paramMap.get('userId');
    this.usersService.getUserDetailsForSelectedUser(userId).subscribe((userDetails: Object) => {
      this.userDetails = userDetails;
      this.isSuccessResponse=true;
    },error=>{
      this.isSuccessResponse=false;
    });
  }

  /**
  * Navigate back to user page
  * @param none
  * @returns none
  */
  goBack(){
    this.location.back();
  }

}
