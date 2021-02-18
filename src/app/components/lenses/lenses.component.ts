import { Component, OnInit } from '@angular/core';
import { lensesModel } from 'src/app/services/gleses-Model/lenses.model';
import { GlesesService } from 'src/app/services/gleses.service';

@Component({
  selector: 'app-lenses',
  templateUrl: './lenses.component.html',
  styleUrls: ['./lenses.component.css']
})
export class LensesComponent implements OnInit {
  lenses:lensesModel[]=[];
  constructor(private glesesService:GlesesService) { }

  ngOnInit(): void {
    this.lenses=this.glesesService.lenses;

  }

}
