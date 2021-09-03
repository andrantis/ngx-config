import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface Configuration {
  env: string;
  nested: {
    message: string
  };
}

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private config: Configuration | null = null;

  constructor(private http: HttpClient) {}

  init(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.http
        .get('assets/config.json')
        .pipe(map((result) => result))
        .subscribe(
          (value) => {
            this.config = value as Configuration;
            resolve(true);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  get env() {
    return this.config?.env;
  }

  get message() {
    return this.config?.nested.message;
  }
}


export function initConfig(configurationService: ConfigurationService) {
  return () => {
    return configurationService.init();
  };
}
