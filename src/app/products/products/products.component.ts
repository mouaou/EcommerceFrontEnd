import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../../services/catalogue.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products;

  constructor(private catService :CatalogueService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  public getProducts(){
    this.catService.getRessurce("/products/search/selectedProducts").subscribe(
      data=>{
        this.products=data;
        console.log("etst");
      },err=>{
        console.log("error");
      }
    )
  }
}
