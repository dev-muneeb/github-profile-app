import { Component, OnInit, Input } from '@angular/core';
import { faEye, faStar } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Repo } from '../repo';
import { Profile } from '../profile';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-profile-repos',
  templateUrl: './profile-repos.component.html',
  styleUrls: ['./profile-repos.component.css']
})
export class ProfileReposComponent implements OnInit {
  @Input() profile: Profile;
  faEye = faEye;
  faStar = faStar;
  repos: Repo[];
  getReposSubscription: Subscription;
  searchSubscription: Subscription
  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.getRepos(this.profile.login);
    this.subscribeSearch();
  }

  subscribeSearch() {
    this.searchSubscription = this.githubService.getSearch().subscribe(o => {
      this.getReposSubscription = this.githubService.getRepos(o.username)
        .subscribe(repos => this.repos = repos)
      });
  }

  getRepos(username): void {
    this.getReposSubscription = this.githubService.getRepos(username)
    .subscribe(repos => this.repos = repos);

  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
    this.getReposSubscription.unsubscribe();
  }
}
