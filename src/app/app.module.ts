import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileReposComponent } from './profile-repos/profile-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    ProfileComponent,
    ProfileReposComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
