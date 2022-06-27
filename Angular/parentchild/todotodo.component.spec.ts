import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodotodoComponent } from './todotodo.component';

describe('TodotodoComponent', () => {
  let component: TodotodoComponent;
  let fixture: ComponentFixture<TodotodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodotodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodotodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
