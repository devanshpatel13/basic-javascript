import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemmComponent } from './todo-itemm.component';

describe('TodoItemmComponent', () => {
  let component: TodoItemmComponent;
  let fixture: ComponentFixture<TodoItemmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoItemmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
