import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatConfirmDialigComponent } from '../mat-confirm-dialig/mat-confirm-dialig.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(msg){
    return this.dialog.open(MatConfirmDialigComponent,{
      width: '400px',
      panelClass:'confirm-dialog-container',
      disableClose: true,
      position :{ top : "10px"},
      data: {
        message: msg
      }
    });
  }

}
