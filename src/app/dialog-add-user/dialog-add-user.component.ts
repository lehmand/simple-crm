import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../models/users.class';
import { CommonModule } from '@angular/common';
import { Firestore, collection, addDoc, FirestoreModule } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    CommonModule,
    MatProgressBarModule,
    FirestoreModule
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {
  constructor(private db: Firestore, public dialogRef: MatDialogRef<DialogAddUserComponent>) {}

  user: User = new User();
  birthDate?: Date;
  loading: boolean = false;

  async saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate?.getTime();

    try {
      await addDoc(collection(this.db, 'users'), this.user.toJSON());
    } catch (err) {
      console.log('Failed to add user', err)
    }

    setTimeout(() => {
      this.loading = false;
      this.dialogRef.close()
    }, 750);

  }
}
