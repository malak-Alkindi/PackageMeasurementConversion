import { Component, OnInit } from '@angular/core';
import {CalculationServiceService} from '../../services/calculation-service.service'
@Component({
  selector: 'app-convert',
  templateUrl: './convert.page.html',
  styleUrls: ['./convert.page.scss'],
})
export class ConvertPage implements OnInit {

  public sequence:string="";
  result:any[]=[];
  convertedArray:any[]=[];
  constructor(public calServ:CalculationServiceService) { }

  ngOnInit() {
  }
measure(){
  this.result=[]
  this.result = this.calServ.convert(this.sequence )

}


convert(){
  this.result
  this.result.forEach((e:any) => {
    for(let i=0;i<e;i++){
      
  
    
    }
  });
 
}
}
