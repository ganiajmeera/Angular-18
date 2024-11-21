import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgComponentComponent } from './ng-component.component';

describe('NgComponentComponent', () => {
  let component: NgComponentComponent;
  let fixture: ComponentFixture<NgComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
