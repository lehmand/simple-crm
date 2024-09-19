import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { UserDetailComponent } from './user-detail.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFireStoreConfig } from '../app.config';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { User } from '../models/users.class';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UserDetailComponent,
        RouterModule.forRoot([]),
        BrowserAnimationsModule
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

    component.user = {
      firstName: 'daniel',
      lastName: 'test',
      address: 'strasse',
      zipCode: 23428,
      city: 'monnem',
      email: 'asdafatalkfa.de',
      toJSON() {
        return {
          firstName: this.firstName, 
           lastName: this.lastName, 
           birthDate: this.birthDate,
           address: this.address, 
           zipCode: this.zipCode, 
           city: this.city, 
           email: this.email
        }
      },
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
