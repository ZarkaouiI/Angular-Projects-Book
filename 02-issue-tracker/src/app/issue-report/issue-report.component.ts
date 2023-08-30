import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IssuesService } from '../issues.service';
import { Issue } from '../issue';
import { Subscription } from 'rxjs';
import { IssueForm } from '../issue-form';


@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})
export class IssueReportComponent implements OnInit, OnDestroy {

  issueForm = new FormGroup<IssueForm>({
    title: new FormControl('', {nonNullable: true, validators: Validators.required}),
    description: new FormControl('', {nonNullable: true}),
    priority: new FormControl('', {nonNullable: true, validators: Validators.required}),
    type: new FormControl('', {nonNullable: true, validators: Validators.required}),
  });

  @Output() formClose = new EventEmitter();

  suggestions: Issue[] = [];

  titleChangesSubscription! : Subscription;

  constructor(private issuesService: IssuesService) {}

  ngOnInit(): void {
    this.titleChangesSubscription = this.issueForm.controls.title.valueChanges.subscribe(title => {
      this.suggestions = this.issuesService.getSuggestions(title);
    });
  }

  addIssue() {
    if(this.issueForm && this.issueForm.invalid) {
      this.issueForm.markAllAsTouched();
      return;
    }
    this.issuesService.createIssue(this.issueForm.getRawValue() as Issue);
    this.formClose.emit();
  }

  ngOnDestroy(): void {
    this.titleChangesSubscription.unsubscribe();
  }
}
