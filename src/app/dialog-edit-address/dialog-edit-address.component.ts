import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { User } from '../models/users.class';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [
    MatDialogModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatProgressBarModule
  ],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {

  loading: boolean = false;
  user!: any;
  userId: any;

  constructor(private db: Firestore, private dialogRef: MatDialogRef<DialogEditAddressComponent>){}

  async updateUser(){
    this.loading = true;
    const docRef = doc(this.db, 'users', this.userId)

    await updateDoc(docRef, this.user.toJSON())

    setTimeout(() => {
      this.loading = false;
      this.dialogRef.close()
    }, 750);
  }
}
