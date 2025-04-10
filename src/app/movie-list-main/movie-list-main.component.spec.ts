import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListMainComponent } from './movie-list-main.component';

describe('MovieListMainComponent', () => {
  let component: MovieListMainComponent;
  let fixture: ComponentFixture<MovieListMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieListMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieListMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
