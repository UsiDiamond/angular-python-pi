import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { ExampleRunscript1Component } from './example-runscript1.component';

describe('ExampleRunscript1Component', () => {
  let component: ExampleRunscript1Component;
  let fixture: ComponentFixture<ExampleRunscript1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExampleRunscript1Component],
      imports:[HttpClientTestingModule],
      schemas:[HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleRunscript1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
