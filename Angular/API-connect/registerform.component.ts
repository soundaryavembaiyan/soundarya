import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsersDataService } from '../users-data.service';


@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

  constructor(private userData: UsersDataService, private toast: ToastrService) { }

  registerForm:any;
  user_details={
    
    email: "soundarya.v@digicoffer.com",
    password: "Soundz@0404"
                }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "email": new FormControl("soundarya.v@digicoffer.com"),
      "password": new FormControl("Soundz@0404"),
      "action": new FormControl("login"),
      "logintype":new FormControl("email")
    });
  }

  submitData(data: any){
    console.log(this.registerForm.value);
    console.warn(data)
    this.userData.login_sign(data).subscribe((result: any) => {
    if (result.error==false){
      this.toast.success("Login Successful")
    }
    else{
      this.toast.error("Login Unsuccessful")
    }
    })
  }

  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get action() { return this.registerForm.get('login'); }
  get logintype() { return this.registerForm.get('email'); }

}

