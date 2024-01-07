import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all-product-by-date',
  templateUrl: './view-all-product-by-date.component.html',
  styleUrls: ['./view-all-product-by-date.component.scss']
})
export class ViewAllProductByDateComponent implements OnInit {
  searchDate = '';

  constructor(private active: ActivatedRoute){}

  ngOnInit(): void{
    this.active.queryParams.subscribe(data => {
      this.searchDate = data['date'];
    });
  }
}
