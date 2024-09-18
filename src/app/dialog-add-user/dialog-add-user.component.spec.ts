import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddUserComponent } from './dialog-add-user.component';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFireStoreConfig } from '../app.config';
import { MatDialogRef } from '@angular/material/dialog';
import { DateAdapter, MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, NativeDateAdapter } from '@angular/material/core';


describe('DialogAddUserComponent', () => {
  let component: DialogAddUserComponent;
  let fixture: ComponentFixture<DialogAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAddUserComponent],
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

    fixture = TestBed.createComponent(DialogAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
