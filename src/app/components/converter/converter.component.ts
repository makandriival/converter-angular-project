import { AfterViewInit, Component, OnInit } from '@angular/core';

import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  
  baseVal = 0;
  exVal = 0;
  baseCur = 'eur'; 
  exCur = 'uah'; 

  eurRate = Number(localStorage.getItem('eurSale'));
  usdRate = Number(localStorage.getItem('usSale'));

  getBaseVal(val:string){
    this.baseVal = Number(val), this.baseExchange();  
  };
  getExValue(val:string){
    this.exVal = Number(val), this.exExchange();
  }

  curBase(val:string){
    this.baseCur = val, this.baseExchange();
  }
  curEx(val:string){
    this.exCur = val, this.baseExchange();
  }

exExchange() {
  this.baseCur === 'uah' ? this.uahConvertEx() : this.baseCur === 'eur' ? 
    this.eurConvertEx() :  this.baseCur === 'usd' ? this.usdConvertEx() : alert('something wrong!!');
}
uahConvertEx(){
  this.exCur === 'uah' ? this.baseVal = this.exVal : this.exCur === 'eur' 
  ? this.baseVal = this.exVal * this.eurRate : this.exCur === 'usd' ? this.baseVal = this.exVal * this.usdRate
   : alert('eur ex err');
}
eurConvertEx(){
  this.exCur === 'uah' ? this.baseVal = this.exVal / this.eurRate : this.exCur === 'eur' 
  ? this.baseVal = this.exVal : this.exCur === 'usd' ? this.baseVal = this.exVal * (this.eurRate / this.usdRate)
   : alert('eur ex err');
}
usdConvertEx(){
this.exCur === 'uah' ? this.baseVal = this.exVal / this.usdRate : this.exCur === 'usd' ?
this.baseVal = this.exVal : this.exCur === 'eur' ? this.baseVal = this.exVal * (this.usdRate / this.eurRate) :
alert('usd ex err');
}
  
  baseExchange() {
    
   this.baseCur === 'uah' ? this.uahConvertBase() : this.baseCur === 'eur' ? 
    this.eurConvertBase() :  this.baseCur === 'usd' ? this.usdConvertBase() : alert('something wrong!!');
  }

  uahConvertBase(){
    this.exCur === 'uah' ? this.exVal = this.baseVal : this.exCur === 'eur' ? 
    this.exVal = this.baseVal / this.eurRate : this.exCur === 'usd' ? 
    this.exVal = this.baseVal / this.usdRate : alert('uah no luck!');
  }

  eurConvertBase(){
    this.exCur === 'eur' ? this.exVal = this.baseVal : this.exCur === 'uah' ? 
    this.exVal = this.baseVal * this.eurRate : this.exCur === 'usd' ? 
    this.exVal = this.baseVal * (this.eurRate / this.usdRate) : alert('eur no luck!');
  }

  usdConvertBase(){
    this.exCur === 'usd' ? this.exVal = this.baseVal : this.exCur === 'uah' ? 
    this.exVal = this.baseVal * this.usdRate : this.exCur === 'eur' ? 
    this.exVal = this.baseVal * (this.usdRate / this.eurRate) : alert('eur no luck!');
  }

  toNumber(){
    this.baseVal.toFixed(2)
    this.exVal.toFixed(2)
  }


  constructor() { 

  }
  
  ngOnInit(): void {
  
  }
  }

