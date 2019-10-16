import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  darkTheme =  new FormControl(false);
  title = 'github-profile';

  constructor(private themeService: ThemeService) {
    this.darkTheme.valueChanges.subscribe(value => {
      if (value) {
        this.themeService.toggleDark();
      } else {
        this.themeService.toggleLight();
      }
    });
  }
}
