import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foods-healthy',
  templateUrl: './foods-healthy.page.html',
  styleUrls: ['./foods-healthy.page.scss'],
})
export class FoodsHealthyPage implements OnInit {
  public ingredients = ["butter","milk"];
  public steps = [""];
  constructor(private router : Router) { }

  ngOnInit() {
  }

  findfood(){
    this.router.navigate(['list-foods']);

  }

}
