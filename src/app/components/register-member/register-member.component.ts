import { Component } from '@angular/core';
import {RegisterMemberService} from "../../services/register-member.service";

@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.component.html',
  styleUrls: ['./register-member.component.css']
})
export class RegisterMemberComponent {
  registeringData : any = {};
  errorMessages : string = "";
  successMessages : string  =""
    constructor(private registerMemberService : RegisterMemberService) {}

  registerMember(){
      this.registerMemberService.registerMember(this.registeringData).subscribe(data=>{
        console.log(data)
        this.successMessages="Registration created successfully"
      },error => {
        this.errorMessages=error.error
        console.log(error)
      })
  }
}
