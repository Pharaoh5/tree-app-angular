import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TreeViewComponent } from "./tree-view/tree-view.component";
import { TreeNode } from './model/tree-node.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize, throwError } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TreeViewComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public treeNodes: TreeNode[] = [];
  public isLoading = false;
  public errorMessage = '';

  public expanded = new Set<number>();

  constructor(private http: HttpClient) {}

   ngOnInit() {
    this.loadTreeData();
  }

  loadTreeData() {
    this.isLoading = true;
    this.errorMessage = '';

    this.http.get<TreeNode[]>('/assets/mocks/tree-data.json')
      .pipe(
        catchError(this.handleError),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe({
        next: (data) => {
          this.treeNodes = data;
        },
        error: (error) => {
          this.errorMessage = error;
        }
      });
  }

  private handleError(error: HttpErrorResponse) {
    let errorMsg = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMsg = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMsg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => errorMsg);
  }

  retryLoading() {
    this.loadTreeData();
  }

  toggle(node: TreeNode) {
    if (this.expanded.has(node.id)) {
      this.expanded.delete(node.id);
    } else {
      this.expanded.add(node.id);
    }
  }

  isExpanded(node: TreeNode): boolean {
    return this.expanded.has(node.id);
  }
}
