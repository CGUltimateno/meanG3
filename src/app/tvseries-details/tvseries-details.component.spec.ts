import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvseriesDetailsComponent } from './tvseries-details.component';

describe('TvseriesDetailsComponent', () => {
  let component: TvseriesDetailsComponent;
  let fixture: ComponentFixture<TvseriesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvseriesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvseriesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
