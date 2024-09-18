import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditUserDetailsComponent } from './dialog-edit-user-details.component';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFireStoreConfig } from '../app.config';
import { MatDialogRef } from '@angular/material/dialog';
import { DateAdapter, MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, NativeDateAdapter } from '@angular/material/core';

describe('DialogEditUserDetailsComponent', () => {
  let component: DialogEditUserDetailsComponent;
  let fixture: ComponentFixture<DialogEditUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditUserDetailsComponent],
      providers: [
        {provide: DateAdapter, useClass: NativeDateAdapter}, {provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS},
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

    fixture = TestBed.createComponent(DialogEditUserDetailsComponent);
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
