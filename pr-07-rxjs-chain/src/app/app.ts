import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api';
import { BehaviorSubject, switchMap } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor],
  templateUrl: './app.html',
})
export class App implements OnInit {
  users: any[] = [];
  posts: any[] = [];

  selectedUserId$ = new BehaviorSubject<number>(1);

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getUsers().subscribe(users => {
      this.users = users;
    });

    this.selectedUserId$
      .pipe(
        switchMap(userId => this.apiService.getPostsByUserId(userId))
      )
      .subscribe(posts => {
        this.posts = posts;
      });
  }

  selectUser(id: number) {
    this.selectedUserId$.next(id);
  }
}
