import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCardDialogsComponent } from './delete-card-dialogs.component';

describe('DeleteCardDialogsComponent', () => {
  let component: DeleteCardDialogsComponent;
  let fixture: ComponentFixture<DeleteCardDialogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCardDialogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteCardDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
