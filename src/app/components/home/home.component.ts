import { Component, OnInit } from '@angular/core';
import { glasesModel } from 'src/app/services/gleses-Model/glases.model';
import { GlesesService } from 'src/app/services/gleses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
glases:glasesModel[]=[];
  constructor(private glesesService:GlesesService) { }

  ngOnInit(): void {
    this.glases=this.glesesService._glases;
  }
  

}
