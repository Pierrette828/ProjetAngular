import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Connexion2Component } from './connexion2.component';

describe('Connexion2Component', () => {
  let component: Connexion2Component;
  let fixture: ComponentFixture<Connexion2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Connexion2Component]
    });
    fixture = TestBed.createComponent(Connexion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
