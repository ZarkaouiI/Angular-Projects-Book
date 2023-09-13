import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit {
  
  user$ : Observable<User> | undefined;

  constructor(private gitHubService: GithubService) {}

  ngOnInit(): void {
    this.user$ = this.gitHubService.getUser();
  }
}
