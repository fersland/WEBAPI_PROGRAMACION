import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productId = 0;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void{
    this.activatedRoute.params.subscribe( data => {
      this.productId = data["id"];
    })
  }
}
