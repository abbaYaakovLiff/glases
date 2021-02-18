import { Component, OnInit } from '@angular/core';
import { glasesModel } from 'src/app/services/gleses-Model/glases.model';
import { GlesesService } from 'src/app/services/gleses.service';

@Component({
  selector: 'app-datails',
  templateUrl: './datails.component.html',
  styleUrls: ['./datails.component.css']
})
export class DatailsComponent implements OnInit {

  constructor(private glesesService:GlesesService) { }

  ngOnInit(): void {
  }
  add(details:glasesModel):void{
    this.glesesService.yore_glases.rn=details.rn;
    this.glesesService.yore_glases.ln=details.ln;
    this.glesesService.yore_glases.rc=details.rc;
    this.glesesService.yore_glases.lc=details.lc;


  }


}
