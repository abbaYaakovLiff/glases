import { Component, OnInit } from '@angular/core';
import { glasesModel } from 'src/app/services/gleses-Model/glases.model';
import { GlesesService } from 'src/app/services/gleses.service';

@Component({
  selector: 'app-finel-order',
  templateUrl: './finel-order.component.html',
  styleUrls: ['./finel-order.component.css']
})
export class FinelOrderComponent implements OnInit {
yoreorder:glasesModel;
  constructor(private glesesService:GlesesService) {
    
   }

  ngOnInit(): void {
    this.yoreorder=this.glesesService.yore_glases;
  }

}
