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
  termentedResult:any[]=[];
  convertedArray:any[]=[];
  constructor(public calServ:CalculationServiceService) { }

  ngOnInit() {
  }
measure(){

  this.result = this.calServ.convert(this.sequence )

}


convert(){
  this.termentedResult=this.result
  console.log(this.termentedResult)
  this.termentedResult.forEach((e:any,g) => {
   
    let num=0
    for(let i=0;i<=e;i++){
   //   console.log(this.termentedResult[i])
   this.termentedResult.shift()
      num+=this.termentedResult[g+1]
      

    
    }
    console.log(this.termentedResult)
 
  });
 
}
}
