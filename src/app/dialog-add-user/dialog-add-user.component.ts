import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { User } from '../models/models.class';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, FormsModule, MatInputModule, MatDatepickerModule, CommonModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

  user: User = new User();
  birthDate?: Date;

  saveUser(){
    this.user.birthDate = this.birthDate?.getTime();
    console.log('Current user is...', this.user);
  }
}
