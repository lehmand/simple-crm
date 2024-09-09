import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, DialogAddUserComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  constructor(private dialog: MatDialog){}

  openDialog(){
    this.dialog.open(DialogAddUserComponent);
  }
}
