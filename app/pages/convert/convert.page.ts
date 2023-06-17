import { Component, OnInit } from '@angular/core';
import {CalculationServiceService} from '../../services/calculation-service.service'
@Component({
  selector: 'app-convert',
  templateUrl: './convert.page.html',
  styleUrls: ['./convert.page.scss'],
})
export class ConvertPage implements OnInit {

  public sequence:string="";
   result:any=[];
  termentedResult:any=[];
  convertedArray:any[]=[];
  constructor(public calServ:CalculationServiceService) { }

  ngOnInit() {
  } 
measure(){

return this.calServ.convert(this.sequence)
  //this.termentedResult=this.result
  this.sequence=""
}


convertt(){
  this.calServ.terminate(this.result)
 
  // this.termentedResult.forEach((e,g) => {
  //  // this.termentedResult=this.termentedResult.splice(0,e);

  //   let num=0
  //  //num+=this.termentedResult[g+1]
  //   for(var i=0;i<=e;i++){
   
     
  //   }
 
  //   //console.log(this.convertedArray)
  //   console.log("----------------")
  //  console.log(this.termentedResult.splice(0,e))
  //  //this.termentedResult=this.convertedArray
  //   //this.getTheConvertedArray(this.termentedResult)
  // });
 
}

// getTheConvertedArray(termentedResult:any[]){
// let num =0
//   for(let i=1;i<=termentedResult.length;i++){
//   num+=termentedResult[i]
// }
// console.log(num)
// }
}
