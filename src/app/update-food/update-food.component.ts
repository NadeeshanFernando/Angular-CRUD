import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.css']
})
export class UpdateFoodComponent implements OnInit {

  id!: number;
  food!: Food;

  constructor(private route: ActivatedRoute,private router: Router,
    private foodService: FoodService) { }

  ngOnInit() {
    this.food = new Food();

    this.id = this.route.snapshot.params['id'];
    
    this.foodService.getFoodById(this.id)
      .subscribe(data => {
        console.log(data)
        this.food = data;
      }, error => console.log(error));
  }

  updateFood() {
    this.foodService.updateFood(this.id, this.food)
      .subscribe(data => {
        console.log(data);
        this.food = new Food();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateFood();    
  }

  gotoList() {
    this.router.navigate(['/foods']);
  }

}
