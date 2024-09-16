import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { Firestore, collection } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { onSnapshot, query } from 'firebase/firestore';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    DialogAddUserComponent,
    MatCardModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  constructor(private dialog: MatDialog, private db: Firestore) {}

  usersAsArray: any[] = [];

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  ngOnInit(): void {
    const q = query(collection(this.db, 'users'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.usersAsArray.push({
          id: doc.id,
          ...doc.data()
        });
      })
    })
  }
}
