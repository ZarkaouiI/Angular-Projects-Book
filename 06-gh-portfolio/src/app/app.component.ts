import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = '06-gh-portfolio';
  username = '';

  constructor(
    private gitHubService: GithubService,
    private titleService: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.username = this.gitHubService.username;
    this.titleService.setTitle('GitHub portfolio');
    this.meta.addTags([
      {
        name: 'description',
        content: `${this.username}'s GitHub portfolio`,
      },
      {
        name: 'author',
        content: this.username,
      },
    ]);
  }
}
