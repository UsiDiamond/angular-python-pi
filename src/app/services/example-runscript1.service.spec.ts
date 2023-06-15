import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { ExampleRunscript1Service } from './example-runscript1.service';

describe('ExampleRunscript1Service', () => {
  let service: ExampleRunscript1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      schemas:[HttpClientTestingModule]});
    service = TestBed.inject(ExampleRunscript1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
