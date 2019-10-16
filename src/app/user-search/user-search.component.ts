import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  constructor(private githubService: GithubService) {}

  ngOnInit() {
  }

  search(username: string): void {
    this.githubService.sendSearch(username);
  }

}
