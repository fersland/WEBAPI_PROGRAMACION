import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  categoriaList$!:Observable<any[]>;

  constructor(private service:ProductService){}

  ngOnInit(): void{
    this.categoriaList$ = this.service.getCategorias();
  }
}
