import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {ApiService}from '../services/api.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private apiService:ApiService) { }
  @ViewChild("input") input!: ElementRef
  @Output() emmiter=new EventEmitter<any>();
  ngOnInit(): void {
   
  }
  searchCity() {
   
    this.emmiter.emit(this.input.nativeElement.value)
  }
  clearInput() {
    this.input.nativeElement.value = ""
  }

}
