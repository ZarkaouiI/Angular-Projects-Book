import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Issue } from '../issue';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IssuesService } from '../issues.service';
import { IssueForm } from '../issue-form';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.css']
})
export class EditIssueComponent implements OnInit {
  @Input() issue : Issue | null = null;
  @Output() issueEdited = new EventEmitter<boolean>();

  editIssueForm: FormGroup<IssueForm> | undefined;

  constructor(private issuesService: IssuesService, private fBuilder: FormBuilder) {}

  ngOnInit(): void {
    if (this.issue) {
      this.editIssueForm = this.fBuilder.group<IssueForm>({
        title: new FormControl(this.issue.title, { nonNullable: true, validators: Validators.required }),
        description: new FormControl(this.issue.description, { nonNullable: true }),
        priority: new FormControl(this.issue.priority, { nonNullable: true, validators: Validators.required }),
      });
    }
  }

  editIssue() {
    if(this.issue)
    this.issuesService.editIssue(this.issue?.issueNo, this.editIssueForm?.getRawValue() as Issue);

    this.issueEdited.emit(true);
  }

}
