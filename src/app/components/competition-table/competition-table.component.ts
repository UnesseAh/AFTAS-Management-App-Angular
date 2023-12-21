import {Component, OnInit} from '@angular/core';
import {CompetitionService} from "../../services/competition.service";
import { PageEvent } from '@angular/material/paginator';
import {Competition} from "../../model/competition.model";



@Component({
  selector: 'app-competition-table',
  templateUrl: './competition-table.component.html',
  styleUrls: ['./competition-table.component.css']
})
export class CompetitionTableComponent implements OnInit {

  competitions : Competition[] | undefined;
  competition : any = {};
  errorMessages:any
  allErrors:any[]=[]
  successMessages:string=''
  pageSizeOptions: number[] = [5, 10, 20];
  pageSize: number = 5;
  pageIndex: number = 0;
  totalCompetitions: number = 0;

  constructor(private competitionService : CompetitionService) {
  }


  ngOnInit() : void {
    this.getCompetitions();
  }

  getCompetitions() {
    this.competitionService
        .getCompetitions(this.pageIndex, this.pageSize)
        .subscribe(
            (response) => {
              this.competitions = response.data;
              this.totalCompetitions = response.data.length;
            },
            (error) => {
              console.error('Error fetching Competitions:', error);
            }
        );
  }

  saveCompetition(){
    this.competitionService.creatCompetition(this.competition).subscribe(data => {
      this.getCompetitions();
      console.log(data)
      this.successMessages ="The Competition Has been Added Successfully"
    }, error => {
      this.errorMessages = error.error
    })
  }


   deleteCompetition(id : string) {
    this.competitionService.deleteCompetition(id).subscribe(data => {
      console.log(data);
    })
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getCompetitions();
  }
}
