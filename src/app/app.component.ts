import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'converter';
  dataLink = 'https://api.monobank.ua/bank/currency';

  usd : number = 0;
  eur : number = 0;
  
  async  fatchRates (){
    await fetch(this.dataLink).then((resp)=>{
      return resp.json()})
      .then((data)=>{
        this.usd = data[0].rateSell;
        this.eur = data[1].rateSell;
        console.log(data)
      }).catch()
    } 
    
    ngOnInit(): void {
      this.fatchRates()
      
    }

}
