import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods!: Observable<Food[]>;

  constructor(private foodService: FoodService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.foods = this.foodService.getFoodList();
  }

  deleteFood(id: number) {
    this.foodService.deleteFood(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  foodDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateFood(id: number){
    this.router.navigate(['update', id]);
  }

}
