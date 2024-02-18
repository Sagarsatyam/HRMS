import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  private baseUrl = "https://biller.koiv.in/api/";
  constructor() { }


  getBaseUrl(): string {
    return this.baseUrl;
  }

  
}
