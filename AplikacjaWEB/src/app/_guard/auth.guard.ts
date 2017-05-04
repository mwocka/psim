/**
 * Created by Mateusz on 27.04.2017.
 */

import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate() {
    if (localStorage.getItem('currentUser')) {
      // zalogowano - true
      return true;
    }

    // nie zalogowano - nawiguje do /welcome
    this.router.navigate(['/welcome']);
    return false;
  }
}
