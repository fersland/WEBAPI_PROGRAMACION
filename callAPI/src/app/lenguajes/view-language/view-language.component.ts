import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-language',
  templateUrl: './view-language.component.html',
  styleUrls: ['./view-language.component.scss']
})
export class ViewLanguageComponent implements OnInit {
  languageId = 0;

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => { 
       console.log(data);
       this.languageId = data['id'];
    });
  }
}
