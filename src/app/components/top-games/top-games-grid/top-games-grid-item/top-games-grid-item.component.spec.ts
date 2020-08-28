import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGamesGridItemComponent } from './top-games-grid-item.component';

describe('TopGamesGridItemComponent', () => {
  let component: TopGamesGridItemComponent;
  let fixture: ComponentFixture<TopGamesGridItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopGamesGridItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopGamesGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
