import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Profile } from '../profile';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile;
  searchSubscription: Subscription;
  getProfileSubscription: Subscription;

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile(): void {
    this.searchSubscription = this.githubService.getSearch().subscribe(o => {
    this.getProfileSubscription = this.githubService.getProfile(o.username)
      .subscribe(profile => this.profile = profile)
    });
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
    this.getProfileSubscription.unsubscribe();
  }

}
