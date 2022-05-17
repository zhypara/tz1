import { Component } from '@angular/core';
import { CurrencyapidateService } from './currencyapidate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 title = "can more if u do ";
 currjson: any = [];

 base = 'USD';
 cont2 = 'USD';
 result: string = '1';
 changebase(a:string){
   this.base = a;
   
   
 }

 tocountry(b:string){
   this.cont2 = b;
   
   
 }
 constructor(private currency: CurrencyapidateService){

  
 }
 convert(){

  console.log(this.base);
  console.log(this.cont2);
  this.currency.getcurrencydata(this.base).subscribe(date =>{
    // console.log(date);
    
    this.currjson = JSON.stringify(date);
    this.currjson = JSON.parse(this.currjson)
    // console.log(this.currjson);
    // this.result = this.currjson.rates.UAH
    
  })

 }

 


 


}


