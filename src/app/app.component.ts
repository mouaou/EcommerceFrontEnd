import { Component, OnInit } from '@angular/core';
import { CatalogueService } from './services/catalogue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categories;
  constructor(private catServices : CatalogueService){}
  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories(){
    this.catServices.getRessurce("/categories").subscribe(
      data=>{
        this.categories=data;
        console.log("u here");
      },err=>{
        console.log("Error");
      }
    )
  }
}
