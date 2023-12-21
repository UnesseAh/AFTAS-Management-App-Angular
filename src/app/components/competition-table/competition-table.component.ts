import {Component, OnInit} from '@angular/core';
import {CompetitionService} from "../../services/competition.service";
import {Router} from "@angular/router";
import {Competition} from "../../model/competition.model";



@Component({
  selector: 'app-competition-table',
  templateUrl: './competition-table.component.html',
  styleUrls: ['./competition-table.component.css']
})
export class CompetitionTableComponent implements OnInit {

  competitions : Competition[] | undefined;
  competition : any = {};

  constructor(private competitionService : CompetitionService) {
  }


  ngOnInit() : void {
    this.getCompetitions();
  }

  private getCompetitions(){
    this.competitionService.getCompetitions().subscribe(data => {
      this.competitions = data.data;
    })
  }

  saveCompetition(){
    this.competitionService.creatCompetition(this.competition).subscribe(data => {
      console.log(data)
    }, error => {
      console.log(error)
    })
  }


   deleteCompetition(id : string) {
    this.competitionService.deleteCompetition(id).subscribe(data => {
      console.log(data);
    })
  }

}
