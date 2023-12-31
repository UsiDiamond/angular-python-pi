import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ExampleRunscript1Service {
  private configUrl: string = 'https://localhost:9443/';
  constructor(private http: HttpClient) {}

  runScript() {
    return this.http.get<string>(this.configUrl);
  }
}
