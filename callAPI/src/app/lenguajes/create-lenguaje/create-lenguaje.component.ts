import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LenguajeService } from '../lenguaje.service';

@Component({
  selector: 'app-create-lenguaje',
  templateUrl: './create-lenguaje.component.html',
  styleUrls: ['./create-lenguaje.component.scss']
})
export class CreateLenguajeComponent implements OnInit{
  form: FormGroup;

  constructor(private _builder:FormBuilder, private _service: LenguajeService){
    this.form = this._builder.group({
      name:['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.form.value);
  }


}
