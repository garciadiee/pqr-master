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
//Register 
export class Tab4Page {
  public registerForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registerForm = this.fb.group({
      nombre:[''],
      email: [''],
      password: [''],
    })
  }

  private readonly loginService = inject(LoginService);
  private readonly router = inject(Router);


  onSubmit() {
    const registerData = this.registerForm.value;
    console.log(registerData)
    this.loginService.register(registerData.nombre, registerData.email, registerData.password).subscribe({
      next: (data) => {
        console.log('Se registro')
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

  register() {

  }

  logout(){
    this.loginService.logout()
    this.router.navigate(['/tabs/tab4'])
          .then(() => {
            window.location.reload();
          });

  }
}
