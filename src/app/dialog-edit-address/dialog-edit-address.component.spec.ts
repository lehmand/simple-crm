import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditAddressComponent } from './dialog-edit-address.component';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFireStoreConfig } from '../app.config';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/users.class';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DialogEditAddressComponent', () => {
  let component: DialogEditAddressComponent;
  let fixture: ComponentFixture<DialogEditAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditAddressComponent, BrowserAnimationsModule],
      providers: [
        provideFirebaseApp(() =>
          initializeApp(getFireStoreConfig())
        ),
        provideFirestore(() => getFirestore()),
        {
          provide: MatDialogRef,
          useValue: {}
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditAddressComponent);
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
