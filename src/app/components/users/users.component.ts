import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { USERS_META } from '../../meta/users.meta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  private usersList: Array<object> = [];
  private USERS_FIELDs_CONFIG: Array<object> = [];
  private isSuccessResponse = true;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    //dynamic User field configuration
    this.USERS_FIELDs_CONFIG = USERS_META;
    this.getAllUsers();
  }

  /**
  * Retrieve user data list
  * @param none
  * @returns none
  */
  getAllUsers() {
    this.usersService.getAllUsers().subscribe((users: Array<object>) => {
      this.usersList = users;
      this.isSuccessResponse = true;
    }, error => {
      this.isSuccessResponse = false;
    });
  }

  /**
 * Navigate to user details screen
 * @param none
 * @returns none
 */
  getUserDetailsForUser(user) {
    this.router.navigate(['/users', user.id]);
  }

}
