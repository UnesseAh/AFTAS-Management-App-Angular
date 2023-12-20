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
  constructor(private levelService : LevelService) {
  }
  ngOnInit() {
    this.getLevels()
  }

  private getLevels(){
    this.levelService.getLevels().subscribe(data => {
      this.levels = data.data;
      console.log(data)
    })
  }

}
