import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByTypeListsComponent } from './by-type-lists.component';

describe('ByTypeListsComponent', () => {
  let component: ByTypeListsComponent;
  let fixture: ComponentFixture<ByTypeListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ByTypeListsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ByTypeListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
