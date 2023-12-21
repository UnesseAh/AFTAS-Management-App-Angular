import {Component, OnInit} from '@angular/core';
import {FishService} from "../../services/fish.service";
import {Fish} from "../../model/fish.model";

@Component({
  selector: 'app-fish-table',
  templateUrl: './fish-table.component.html',
  styleUrls: ['./fish-table.component.css']
})
export class FishTableComponent implements OnInit {

  fishes : Fish[] | undefined;
  fish : any = {};

  constructor(private fishService : FishService) { }

  ngOnInit() {
    this.getFishes()
  }

  getFishes(){
    this.fishService.getFishes().subscribe(data => {
      this.fishes = data.data;
      console.log(data);
    })
  }

  saveFish(){
    this.fishService.createFish(this.fish).subscribe(data => {
      console.log(data)
    }, error => {
      console.log(error)
    });
  }

}
