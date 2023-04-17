import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private baseUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  getFoodById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getFoodsById/${id}`);
  }

  createFood(food: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/addFoods`, food);
  }

  updateFood(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updateFoods/${id}`, value);
  }

  deleteFood(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteFoods/${id}`, { responseType: 'text' });
  }

  getFoodList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getFoods`);
  }
}
