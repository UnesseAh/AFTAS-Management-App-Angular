import { Component } from '@angular/core';
import {HuntingService} from "../../services/hunting.service";

@Component({
  selector: 'app-create-hanting',
  templateUrl: './create-hanting.component.html',
  styleUrls: ['./create-hanting.component.css']
})
export class CreateHantingComponent {
  hunt : any={}
  errorMessages : string = ''
  successMessages : string = ''
  constructor(private huntingService : HuntingService) {}
  createHunting(){
    console.log(this.hunt)
    this.huntingService.createHunting(this.hunt).subscribe(data=>{
      this.successMessages = "Hunting created succesfully!"
    },error => {
      this.errorMessages=error.error;
      console.log(error)
    })
  }
}
