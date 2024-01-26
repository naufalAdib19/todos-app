import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByDateListsComponent } from './by-date-lists.component';

describe('ByDateListsComponent', () => {
  let component: ByDateListsComponent;
  let fixture: ComponentFixture<ByDateListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ByDateListsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ByDateListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
