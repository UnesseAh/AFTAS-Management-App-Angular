import { Component } from '@angular/core';
import {MemberService} from "../../services/member.service";

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent {
  member : any = {};
  identityDocument : string = "";
  constructor(private memberService : MemberService) {
  }

  saveMember(){
    this.member['identityDocument'] = this.identityDocument;
    this.memberService.createMember(this.member).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
}
