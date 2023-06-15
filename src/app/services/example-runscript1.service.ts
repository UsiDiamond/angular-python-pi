import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ExampleRunscript1Service {
  private configUrl: string = 'http://localhost:8080/cgi-gateway/script1';
  constructor(private http: HttpClient) {}

  runScript() {
    return this.http.get<string>(this.configUrl);
  }
}
