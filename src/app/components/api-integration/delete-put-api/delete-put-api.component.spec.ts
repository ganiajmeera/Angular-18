import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePutApiComponent } from './delete-put-api.component';

describe('DeletePutApiComponent', () => {
  let component: DeletePutApiComponent;
  let fixture: ComponentFixture<DeletePutApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletePutApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePutApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
