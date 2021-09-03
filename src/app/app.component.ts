import { Component } from '@angular/core';
import { ConfigurationService } from './configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-config';

  constructor(private config: ConfigurationService) {
    console.log(this.config.env);
  }

  get env() {
    return this.config.env;
  }

  get message() {
    return this.config.message;
  }
}
