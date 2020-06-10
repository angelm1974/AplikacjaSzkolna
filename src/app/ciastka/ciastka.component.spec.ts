import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiastkaComponent } from './ciastka.component';

describe('CiastkaComponent', () => {
  let component: CiastkaComponent;
  let fixture: ComponentFixture<CiastkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiastkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiastkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
