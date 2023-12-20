import {Component, OnInit} from '@angular/core';
import {MemberService} from "../../services/member.service";
import {Member} from "../../model/member.model";

@Component({
  selector: 'app-member-table',
  templateUrl: './member-table.component.html',
  styleUrls: ['./member-table.component.css']
})
export class MemberTableComponent implements OnInit {

    members : Member[] | undefined;
    constructor(private memberService : MemberService) {}

    ngOnInit() : void {
      this.getMembers();
    }

    private getMembers()   {
      this.memberService.getMembers().subscribe(data => {
        this.members = data.data;
        console.log(data)
      })
    }


}
