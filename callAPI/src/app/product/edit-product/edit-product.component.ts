import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productId = 0;
  Productformgroup :FormGroup;
  categoriaList$!:Observable<any[]>;
  selectProductId:Observable<any[]>;
  isEdit=false;

  constructor(private activatedRoute: ActivatedRoute, private service: ProductService, private fb: FormBuilder) {
    this.Productformgroup = this.fb.group({
      name : [""],
      price : [""],
      stock : [""],
      imgProduct : [""],
      color : [""],
      categoryId : [""]
    })
  }

  ngOnInit(){
      this.productId = this.activatedRoute.snapshot.params['id'];

      if(this.productId){{
        this.isEdit = true;
        this.service.viewProductId(this.productId).subscribe(results => {
          console.log(results);
          this.Productformgroup.patchValue(results);
        })
      }}

    this.categoriaList$ = this.service.getCategorias();

    this.selectProductId = this.service.viewProductId['productId'];
  }

  onSubmit(){
    console.log(this.Productformgroup.value);
    //this.service.createProduct
  }


}
