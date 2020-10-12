import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-confirm-dialig',
  templateUrl: './mat-confirm-dialig.component.html',
  styleUrls: ['./mat-confirm-dialig.component.css']
})
export class MatConfirmDialigComponent implements OnInit {

  constructor(@Inject (MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<MatConfirmDialigComponent>) { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close(false);
  }

}
