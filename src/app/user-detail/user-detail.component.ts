import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/users.class';
import { onSnapshot, doc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditUserDetailsComponent } from '../dialog-edit-user-details/dialog-edit-user-details.component';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent implements OnInit {
  userId: any = '';
  user: User = new User();

  constructor(private route: ActivatedRoute, 
    private db: Firestore,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.userId = paramMap.get('id');
    });
    this.getUser();
  }

  getUser() {
    const unsub = onSnapshot(doc(this.db, 'users', this.userId), (doc) => {
      this.user = new User(doc.data());
    });
  }

  editUserDetails() {
    this.dialog.open(DialogEditUserDetailsComponent);
    
  }

  editAddress() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = this.user
  }
}
