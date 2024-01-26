import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNotePagesComponent } from './add-note-pages.component';

describe('AddNotePagesComponent', () => {
  let component: AddNotePagesComponent;
  let fixture: ComponentFixture<AddNotePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNotePagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNotePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
