import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationServiceService {
  result:any=[]
  Sresult:any[]=[]
  charcter:any[]=["-","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
   numbers:any[]=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]

   termentedResult:any[]=[];
  constructor() { }

  convert(sequance:string){
    this.result=[]
this.Sresult=sequance.split("");
this.Sresult.forEach((e:any,i) => {


  if(e!='z'){
    this.result.push(this.numbers[this.charcter.indexOf(e)])
  }
  else{
    this.result.push((this.numbers[this.charcter.indexOf(e)]) + (this.numbers[this.charcter.indexOf( this.Sresult[i+1])]))
    this.Sresult.splice(this.charcter.indexOf(this.Sresult[i+1]),1)
  }
});

return  this.result
  }

  terminate(result:any[]){
    this.termentedResult=result
    console.log(this.termentedResult.splice(0,3))
  }
}
