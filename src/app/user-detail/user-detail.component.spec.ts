import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { UserDetailComponent } from './user-detail.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFireStoreConfig } from '../app.config';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UserDetailComponent,
        RouterModule.forRoot([]),
      ],
      providers: [
        provideFirebaseApp(() =>
          initializeApp(getFireStoreConfig())
        ),
        provideFirestore(() => getFirestore()),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
