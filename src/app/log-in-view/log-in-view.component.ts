import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthenticationService } from 'src/app/services/user-authentication.service';

@Component({
  selector: 'app-log-in-view',
  templateUrl: './log-in-view.component.html',
  styleUrls: ['./log-in-view.component.scss']
})
export class LogInViewComponent {

  userName: string = '';
  password: string = '';

  constructor(private authenticationService: UserAuthenticationService, private router: Router) { }

  public signIn(): void {

    if (this.userName.length === 0 || this.password.length === 0) {
      const alertMessage: string = this.userName.length === 0 && this.password.length === 0
        ? 'Please fill user and password fields'
        : this.userName.length === 0 ? 'Please fill user field' : 'Please fill password field';
      window.alert(alertMessage);
      return;
    }

    const token: string = localStorage.getItem('movie-app-token') ?? '';

    if (token === '') {
      window.alert('Token not valid, you will be redirected to Movies List');
      this.router.navigate(['movies-list']);
      return;
    }

    this.authenticationService.createSessionWithLogin(token, this.userName, this.password)
      .then((response: any) => {
        this.authenticationService.createSessionId(response.request_token)
          .then((response: any) => {
            this.authenticationService.isUserLoggedIn = true;
            localStorage.setItem('movie-app-session-id', response.session_id);
            this.router.navigate(['movies-list']);
          })
          .catch((error: any) => {
            console.error('An error ocurred trying to generate the session id, please try again')
            window.alert('An error ocurred trying to generate the session id, please try again');
          })
      })
      .catch((error: any) => {
        console.error('An error ocurred trying to log in, please try again')
        window.alert('An error ocurred trying to log in, please try again');
      })
  }

}
