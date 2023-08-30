# IssueTracker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## For The Exercise : 
Here's my method of solving it : 

1 - Ng-generated the `edit-issue` component.
2 - Added the logic to the `issue-list` component to display the edit form.
3 - Bind the `[issue]` property to the `selectedIssue` from `issue-list`.
4 - Create the `editIssueForm`. It's important to make the `type` field optional
5 - Bind the `(issueEdited)` event using `@Output` and `EventEmitter<boolean>` to decide wether modification was saved not.
6 - Add `editIssue` method in the service and call it on submitting the `editIssueForm`