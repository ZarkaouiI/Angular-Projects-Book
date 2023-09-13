import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Observable } from 'rxjs';
import { Organization } from '../organization';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {

  orgs$ : Observable<Organization[]> | undefined;

  constructor(private gitHubService: GithubService) {}

  ngOnInit(): void {
    this.orgs$ = this.gitHubService.getOrganizations();
  }
}
