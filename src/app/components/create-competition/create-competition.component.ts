import {Component, OnInit} from '@angular/core';
import {CompetitionService} from "../../services/competition.service";
import {Router} from "@angular/router";
import {Competition} from "../../model/competition.model";


@Component({
  selector: 'app-create-competition',
  templateUrl: './create-competition.component.html',
  styleUrls: ['./create-competition.component.css']
})
export class CreateCompetitionComponent implements OnInit{

  competition : Competition = new Competition();

  constructor(private competitionService : CompetitionService, private router : Router) {
  }

  ngOnInit() : void{
  }

  saveCompetition(){
    this.competitionService.creatCompetition(this.competition).subscribe(data =>
      {
        console.log(data);
        this.redirectToCompetitionList();
      }
    )
  }

  redirectToCompetitionList(){
    this.router.navigate(['/competition']);
  }

}
