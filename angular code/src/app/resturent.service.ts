import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resturant } from './Resturent.model';
@Injectable({
  providedIn: 'root'
})
export class ResturentService {

  constructor(private http:HttpClient) {
   }
   saveResturant(resturant:Resturant )
  {
    alert('saved');
    return this.http.post<any>('http://localhost:1022/resturant',resturant);
  }

  updateResturant(resturant:Resturant)
  {
    return this.http.put<Resturant>('http://localhost:1022/resturant',resturant);
  }

  getAllResturants()
  {
    return this.http.get<Resturant[]>('http://localhost:1022/resturant');
  }


  deleteResturant(resturantId:number)
  {
    return this.http.delete(`http://localhost:1022/resturant/${resturantId}`);
  }

  getResturant(resturantId:number)
  {
    return this.http.get<Resturant>(`http://localhost:1022/resturant/${resturantId}`);
  }

}

