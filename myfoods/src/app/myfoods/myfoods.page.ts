import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myfoods',
  templateUrl: './myfoods.page.html',
  styleUrls: ['./myfoods.page.scss'],
})
export class MyfoodsPage implements OnInit {
  public ingredients = ["butter","milk"];
  public steps = [""];
  constructor(private router : Router) { }

  ngOnInit() {
  }

  findfood(){
    this.router.navigate(['list-foods']);

  }

}

