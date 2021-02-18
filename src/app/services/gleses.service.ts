import { Injectable } from '@angular/core';
import { glasesModel } from './gleses-Model/glases.model';
import { lensesModel } from './gleses-Model/lenses.model';

@Injectable({
  providedIn: 'root'
})
export class GlesesService {

  constructor() { }
  yore_glases:glasesModel;
  _glases:  glasesModel[] = [{
    type:"מסגרת ברזל",
    price:50,
    image: "assets/glases.jpg",
}, {
  type:"מסגרת פלסטיק",
  price:80,
  image: "assets/glases.jpg",
},
{
  type:"מסגרת טיטניום ",
    price:150,
    image: "assets/glases.jpg",
}

 
];
lenses:lensesModel [] = [{
  type:"מולטי פוקל",
  price:80,
 
}, {
type:"קרוב",
price:20,

},
{
type:"רחוק  ",
  price:50,
  
}


];
}


