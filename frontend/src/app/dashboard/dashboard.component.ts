import { Component, OnInit } from '@angular/core';
import { GetRetailDataService } from '../service/get-retail-data.service';
import { GetStoresDataService } from '../service/get-stores-data.service';
import { GetSalesDataService } from '../service/get-sales-data.service';
import { HttpClient } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { TdMediaService } from '@covalent/core';
import { single, times } from './data';
import { DescribeService } from '../service/describe.service';
import { FileDetector } from 'selenium-webdriver/remote';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 
 
  constructor(public media: TdMediaService,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,private retailApi:GetRetailDataService,private http:HttpClient,private storesApi:GetStoresDataService,private salesApi:GetSalesDataService,private desc:DescribeService) { 
      this._iconRegistry.addSvgIcon('teradata', this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent/develop/src/assets/icons/teradata.svg'));
      this._iconRegistry.addSvgIcon('teradata-dark', this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent/develop/src/assets/icons/teradata-dark.svg'));
              this._iconRegistry.addSvgIcon('teradata-solid', this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent/develop/src/assets/icons/teradata-solid.svg'));
              this._iconRegistry.addSvgIcon('teradata-icon', this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent/develop/src/assets/icons/teradata-icon.svg'));        
              this._iconRegistry.addSvgIconInNamespace('assets', 'teradata-ux',
              this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/teradata-ux.svg'));
              this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
              this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg'));
              this._iconRegistry.addSvgIconInNamespace('assets', 'covalent-mark',
              this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent-mark.svg'));
              Object.assign(this,{ single,times })

            }
  retail:string[]=[

  ];
  stores:any[]=[

  ];
  sales:any[]=[

  ];
  data:any[]=[

  ];
  pie: any[];
  single: any[];
  times: any[];
  
  name = 'Mean Stack APP';
  chart;   
ngOnInit() {
    this.getStores();
    this.getSales();
    this.getDescription();
    
}
  getRetailData(){
    this.retailApi.retreiveData().subscribe(data => {
      this.retail=data;
      console.log(this.retail);
    })
  }
  getStores(){
    this.storesApi.getStoresData().subscribe(data => {
      console.log(data);
      this.single = data.map(datum => ({ name: datum.Store.toString(), value: datum.Size }));
    });
  }
getSales(){
  this.salesApi.salesData().subscribe(data=>{
    this.sales=data;
  })
}
getDescription(){
  this.desc.description().subscribe(res=>{
    this.data=res.map(datum=> ({field:datum.Field,Store:datum.Store,Dept:datum.Dept,Weekly_Sales:datum.Weekly_Sales}));
  })
}


  
    
}
