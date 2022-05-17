import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  usd = localStorage.getItem('usSale');
  eur = localStorage.getItem('eurSale');


  // usd: number= 5;
  // eur: number= 10;
  // uah: number= 2;

  constructor() { 
    
   }

  ngOnInit(): void {
    fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
    .then(function(resp) {
      return resp.json();
    }).then(function(data){
      const usRate = data[0].sale ;
      const eurRate = data[1].sale;``
      localStorage.setItem('usSale', usRate);
      localStorage.setItem('eurSale', eurRate);
    });
  }

}
