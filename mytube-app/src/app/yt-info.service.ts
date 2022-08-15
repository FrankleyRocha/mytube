import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YtInfoService {

  constructor(
    private http: HttpClient
  ) {

  }

  getInfo(videoId:string){
    return this.http.get(`${BASE_URL}/info/${videoId}`);
  }

}
