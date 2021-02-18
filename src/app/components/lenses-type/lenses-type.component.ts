import { Component, Input, OnInit } from '@angular/core';
import { lensesModel } from 'src/app/services/gleses-Model/lenses.model';
import { GlesesService } from 'src/app/services/gleses.service';

@Component({
  selector: 'app-lenses-type',
  templateUrl: './lenses-type.component.html',
  styleUrls: ['./lenses-type.component.css']
})
export class LensesTypeComponent implements OnInit {
  @Input() lens: lensesModel;
  constructor(private glesesService:GlesesService) { }

  ngOnInit(): void {
  }
  add():void{
    this.glesesService.yore_glases.lenses=this.lens.type;
    this.glesesService.yore_glases.price +=this.lens.price;
    


  }

}
