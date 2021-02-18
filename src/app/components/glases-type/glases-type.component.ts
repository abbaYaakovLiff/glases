import { Component, Input, OnInit } from '@angular/core';

import { glasesModel } from 'src/app/services/gleses-Model/glases.model';
import { GlesesService } from 'src/app/services/gleses.service';

@Component({
  selector: 'app-glases-type',
  templateUrl: './glases-type.component.html',
  styleUrls: ['./glases-type.component.css']
})
export class GlasesTypeComponent implements OnInit {
  @Input() glas: glasesModel;
  constructor(private glesesService:GlesesService) { }

  ngOnInit(): void {
   
  }
  add():void{
    this.glesesService.yore_glases.type=this.glas.type;
    this.glesesService.yore_glases.price +=this.glas.price;
    this.glesesService.yore_glases.image=this.glas.image;


  }

}
