import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];
  showReportIssue = false;
  showEditIssue = false;
  selectedIssue: Issue | null = null;

  constructor(private issuesService: IssuesService) {}

  ngOnInit(): void {
    this.getIssues();
  }

  onEditIssue(issue: Issue) {
    this.showEditIssue = true;
    this.selectedIssue = issue;
  }

  onConfirm(confirmed: boolean) {
    if (confirmed && this.selectedIssue) {
      this.issuesService.completeIssue(this.selectedIssue);
      this.getIssues();
    }
    this.selectedIssue = null;
  }

  onCloseEditIssue() {
    this.getIssues();
    this.showEditIssue = false;
    this.selectedIssue = null;
  }

  onCloseReport() {
    this.showReportIssue = false;
    this.getIssues();
  }

  getIssues() {
    this.issues = this.issuesService.getPedingIssues();
  }
}
