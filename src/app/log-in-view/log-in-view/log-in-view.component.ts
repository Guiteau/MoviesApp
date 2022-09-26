import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { token } from 'src/app/models/authentication/token';
import { UserAuthenticationService } from 'src/app/services/user-authentication.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-log-in-view',
  templateUrl: './log-in-view.component.html',
  styleUrls: ['./log-in-view.component.scss']
})
export class LogInViewComponent implements OnInit {

  userName: string = '';
  password: string = '';
  alertMessage: string = '';
  token: string = '';

  constructor(private authenticationService: UserAuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  public async logUser() {
    this.token = '';
    this.alertMessage = '';
    if (this.userName.length > 0 && this.password.length > 0) {
      this.token = await Promise.resolve(this.getNewToken());
      if (this.token.length > 0) {
        window.location.href = environment.URLToAskUserPermission + this.token + '?redirect_to=http://localhost:4200/login-view';
      } else {
        this.alertMessage += 'An error ocurred trying to generate a new token, please try again';
        window.alert(this.alertMessage);
      }
    } else {
      this.alertMessage += this.userName.length == 0 && this.password.length == 0 ? 'Please fill user and password fields' : '';
      this.alertMessage += this.userName.length == 0 && this.password.length > 0 ? 'Please fill user field' : '';
      this.alertMessage += this.userName.length > 0 && this.password.length == 0 ? 'Please fill password field' : '';
      window.alert(this.alertMessage);
    }
  }

  public async getNewToken(): Promise<string> {
    this.token = '';
    this.alertMessage = '';
    const promise = await Promise.resolve(this.authenticationService.getNewToken());
    return promise.request_token;
    // this.authenticationService.getNewToken().then((response: token) => {
    //   if (response == undefined) {
    //     window.alert('An error ocurred trying to generate a new token, please try again');
    //     return '';
    //   }
    //   console.log('esta dentro 3 ' + response.request_token);
    //   return response.request_token;
    // })
    //   .catch((error: any) => {
    //     console.log('Error generating a new token in getNewToken()', error);
    //     window.alert('An error ocurred trying to generate a new token, please try again');
    //   })
    //  return '';
  }


}
