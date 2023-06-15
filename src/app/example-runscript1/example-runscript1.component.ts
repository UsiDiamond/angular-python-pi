import { Component, OnInit } from '@angular/core';
import { ExampleRunscript1Service } from '../services/example-runscript1.service';

@Component({
  selector: 'app-example-runscript1',
  templateUrl: './example-runscript1.component.html',
  styleUrls: ['./example-runscript1.component.css'],
})
export class ExampleRunscript1Component implements OnInit {
  public data: string | undefined;
  constructor(private service: ExampleRunscript1Service) {}

  onClick() {
    this.service.runScript().subscribe((data) => {
      console.log(data);
      return (this.data = data);
    });
  }

  ngOnInit(): void {}
}
