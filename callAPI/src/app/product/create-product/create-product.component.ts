import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { FormsModule } from '@angular/forms';
import { Category } from '../category';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  categories = ["COMIDA", "ROPA"];
  product: Product[] = [];
  categoriaList$!:Observable<any[]>;

  Productformgroup :FormGroup;

  changeCategory(e:any){
    
  }

  constructor(private service: ProductService, private fb : FormBuilder){
    this.Productformgroup = this.fb.group({
      name : [""],
      price : [""],
      stock : [""],
      imgProduct : [""],
      color : [""],
      categoryId : [""]
    })
  }
  
  ngOnInit(): void {
    this.categoriaList$ = this.service.getCategorias();
  }    

  onSubmit(){
    console.log(this.Productformgroup.value);
    this.service.createProduct(this.Productformgroup.value).subscribe(response => {
      console.log('Product added successfully!');
    })
  }
}