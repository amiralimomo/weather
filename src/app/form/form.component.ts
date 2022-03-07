import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {ApiService}from '../services/api.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private apiService:ApiService) { }
  @ViewChild("input") input!: ElementRef
  ngOnInit(): void {
    this.apiService.getFiveDaysWeather().subscribe((data)=>{this.apiService.fiveDays})
    this.apiService.getCurrentWeather().subscribe((data)=>{this.apiService.Current})
  }
  searchCity() {
    this.apiService.getFiveDaysWeather(this.input.nativeElement.value).subscribe((data)=>{this.apiService.fiveDays})
    this.apiService.getCurrentWeather(this.input.nativeElement.value).subscribe((data)=>{this.apiService.Current})
    // console.log("city: ",this.input.nativeElement.value)
  }
  clearInput() {
    this.input.nativeElement.value = ""
  }

}
