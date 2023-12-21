import {Component, OnInit} from '@angular/core';
import {LevelService} from "../../services/level.service";
import {Level} from "../../model/level.model";

@Component({
  selector: 'app-level-table',
  templateUrl: './level-table.component.html',
  styleUrls: ['./level-table.component.css']
})
export class LevelTableComponent implements OnInit{
  levels : Level[] | undefined;
  level : any = {};

  constructor(private levelService : LevelService) {
  }

  ngOnInit() {
    this.getLevels()
  }

  getLevels(){
    this.levelService.getLevels().subscribe(data => {
      this.levels = data.data;
      console.log(data)
    })
  }

  saveLevel(){
    console.log(this.level)
    this.levelService.createLevel(this.level).subscribe(data => {
      console.log(data)
    }, error => {
      console.log(error)
    });
  }

}
