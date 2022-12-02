import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengernavComponent } from './messengernav.component';

describe('MessengernavComponent', () => {
  let component: MessengernavComponent;
  let fixture: ComponentFixture<MessengernavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessengernavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessengernavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
