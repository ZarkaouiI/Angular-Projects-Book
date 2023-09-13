import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Observable, map } from 'rxjs';
import { Repository } from '../repository';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
})
export class RepositoriesComponent implements OnInit {
  repos$: Observable<Repository[]> | undefined;

  constructor(private gitHubService: GithubService) {}

  ngOnInit(): void {
    this.repos$ = this.gitHubService
      .getRepositories()
      .pipe(
        map((repos) => repos.filter((repo) => !repo.fork))
      );
  }
}
