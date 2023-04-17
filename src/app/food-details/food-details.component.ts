import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['foods']);
  }

}
