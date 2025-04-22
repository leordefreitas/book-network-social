import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/services/authentication.service";

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss']
})
export class ActivateAccountComponent {

  message: string = '';
  isOkay: boolean = true;
  submitted: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
  }

  onCodeCompleted(token: string) {
    this.confirmationAccount(token);
  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }

  private confirmationAccount(token: string) {
    this.authService.confirm({
      token
    }).subscribe({
      next: result => {
        this.message = "Your account was successfully confirmed.\nNow you can proceed to login";
        this.submitted = true;
        this.isOkay = true;
      },
      error: err => {
        this.message = "Token has been expired or invalid";
        this.submitted = true;
        this.isOkay = false;
      }
    })
  }
}
