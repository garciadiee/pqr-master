import { Component, inject } from '@angular/core';
import { LoginService } from '../core/services/login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    })
  }

  private readonly loginService = inject(LoginService);
  private readonly router = inject(Router);


  onSubmit() {
    const loginData = this.loginForm.value;
    console.log(loginData)
    this.loginService.login(loginData.email, loginData.password).subscribe({
      next: (data) => {
        console.log('Se resgistro')
        this.router.navigate(['/tabs/tab2'])
          .then(() => {
            window.location.reload();
          });

      },
      error: (e) => {
        console.log(e)
      }
    })
  }

  login() {

  }

  logout(){
    this.loginService.logout()
    this.router.navigate(['/tabs/tab4'])
          .then(() => {
            window.location.reload();
          });

  }
}
