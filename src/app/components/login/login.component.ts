import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    public adminAuth: AngularFireAuth,
    private router: Router,
    private authServer: UserAuthService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  logIn() {
    if (this.loginForm.invalid) return;

    this.authServer
      .loginFire(this.loginForm.value.email, this.loginForm.value.password)
      .then((res) => {
        if (res == null) {
          console.log('yay');
          this.router.navigate(['/home']);
        } else console.log(res + ' error');
      });
  }

  logOut() {
    this.adminAuth.signOut();
  }
}
