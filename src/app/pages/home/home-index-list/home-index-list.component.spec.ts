import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIndexListComponent } from './home-index-list.component';

describe('HomeIndexListComponent', () => {
  let component: HomeIndexListComponent;
  let fixture: ComponentFixture<HomeIndexListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeIndexListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeIndexListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
