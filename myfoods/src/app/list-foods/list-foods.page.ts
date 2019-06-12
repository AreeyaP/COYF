import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-foods',
  templateUrl: './list-foods.page.html',
  styleUrls: ['./list-foods.page.scss'],
})

export class ListFoodsPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  gotoSteps(){
    this.router.navigate(['steps-menu']);

  }




}
