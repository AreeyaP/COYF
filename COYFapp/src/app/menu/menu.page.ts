import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  selectedPath = '';
 
  pages = [
    {
      title: 'Home',
      url: '/menu/home',
      icon :"home"
    },
    {
      title: 'Profile',
      url: '/menu/profile',
      icon :"contact"
    },
    {
      title: 'FoodsHealthy',
      url: '/menu/foodshealthy',
      icon :"nutrition"
    },
    {
      title: 'Qrcode',
      url: '/menu/qrcode',
      icon :"qr-scanner"
    },
    {
      title: 'Settings',
      url: '/menu/settings',
      icon :"cog"
    }
   
 
    

  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {

  }

}