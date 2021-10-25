import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
   loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
   });

   constructor(private router: Router, private authService: AuthService) {}

   ngOnInit() {}

   login(): void {
      if (this.loginForm.value.email && this.loginForm.value.password) {
         this.authService
            .login(this.loginForm.value.email, this.loginForm.value.password)
            .subscribe(
               (res) => {
                  this.authService.setCurrentUser(res.user)
                  this.router.navigate(['pets']);
               },
               (err) => {
                  if (err.error['email'] || err.error['password'] || err.error['non_field_errors'])
                     Swal.fire({
                        icon: 'error',
                        title: 'Invalid credentials',
                     });
                  else
                     Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong with the server!',
                     });
               }
            );
      }
   }
}
