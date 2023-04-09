import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sidebar:any = document.querySelector("#sidebar");
  maxSidebar:any = document.querySelector(".max");
  miniSidebar:any = document.querySelector(".mini");
  roundout:any = document.querySelector(".roundout");
  maxToolbar:any = document.querySelector(".max-toolbar");
  logo:any = document.querySelector('.logo');
  content:any = document.querySelector('.content');
  moon:any = document.querySelector(".moon");
  sun:any = document.querySelector(".sun");

  constructor( ) { }

  ngOnInit(): void {
    this.openNav();
  }

  openNav() {
    if(this.sidebar.classList.contains('-translate-x-48')){
      this.sidebar.classList.remove("-translate-x-48")
      this.sidebar.classList.add("translate-x-none")
      this.maxSidebar.classList.remove("hidden")
      this.maxSidebar.classList.add("flex")
      this.miniSidebar.classList.remove("flex")
      this.miniSidebar.classList.add("hidden")
      this.maxToolbar.classList.add("translate-x-0")
      this.maxToolbar.classList.remove("translate-x-24","scale-x-0")
      this.logo.classList.remove("ml-12")
      this.content.classList.remove("ml-12")
      this.content.classList.add("ml-12","md:ml-60")
    }else{
      this.sidebar.classList.add("-translate-x-48")
      this.sidebar.classList.remove("translate-x-none")
      this.maxSidebar.classList.add("hidden")
      this.maxSidebar.classList.remove("flex")
      this.miniSidebar.classList.add("flex")
      this.miniSidebar.classList.remove("hidden")
      this.maxToolbar.classList.add("translate-x-24","scale-x-0")
      this.maxToolbar.classList.remove("translate-x-0")
      this.logo.classList.add('ml-12')
      this.content.classList.remove("ml-12","md:ml-60")
      this.content.classList.add("ml-12")
    }
  }
  //   if(sidebar.classList.contains('-translate-x-48')){
  //       // max sidebar
  //       sidebar.classList.remove("-translate-x-48")
  //       sidebar.classList.add("translate-x-none")
  //       maxSidebar.classList.remove("hidden")
  //       maxSidebar.classList.add("flex")
  //       miniSidebar.classList.remove("flex")
  //       miniSidebar.classList.add("hidden")
  //       maxToolbar.classList.add("translate-x-0")
  //       maxToolbar.classList.remove("translate-x-24","scale-x-0")
  //       logo.classList.remove("ml-12")
  //       content.classList.remove("ml-12")
  //       content.classList.add("ml-12","md:ml-60")
  //   }else{
  //       // mini sidebar
  //       sidebar.classList.add("-translate-x-48")
  //       sidebar.classList.remove("translate-x-none")
  //       maxSidebar.classList.add("hidden")
  //       maxSidebar.classList.remove("flex")
  //       miniSidebar.classList.add("flex")
  //       miniSidebar.classList.remove("hidden")
  //       maxToolbar.classList.add("translate-x-24","scale-x-0")
  //       maxToolbar.classList.remove("translate-x-0")
  //       logo.classList.add('ml-12')
  //       content.classList.remove("ml-12","md:ml-60")
  //       content.classList.add("ml-12")
  //   }
  // }
}
