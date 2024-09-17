import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { User } from '../models/users.class';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-dialog-edit-user-details',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatDialogModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatProgressBarModule
  ],
  templateUrl: './dialog-edit-user-details.component.html',
  styleUrl: './dialog-edit-user-details.component.scss'
})
export class DialogEditUserDetailsComponent{

  loading: boolean = false;
  user!: User;
  userId: any;
  birthDate?: Date;


  constructor(
    private db: Firestore, 
    public dialogRef: MatDialogRef<DialogEditUserDetailsComponent>
  ){

  }

  async updateUser(){
    this.loading = true;
    this.user.birthDate = this.birthDate?.getTime();
    const docRef = doc(this.db, 'users', this.userId)

    await updateDoc(docRef, this.user.toJSON())

    setTimeout(() => {
      this.loading = false;
      this.dialogRef.close()
    }, 750);
  }
}
