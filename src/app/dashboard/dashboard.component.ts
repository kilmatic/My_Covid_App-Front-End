import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sidebar: any;
  maxSidebar: any;
  miniSidebar: any;
  roundout: any;
  maxToolbar: any;
  logo: any;
  content: any;
  moon: any;
  sun: any;

  constructor( private el: ElementRef ) {
    this.sidebar = this.el.nativeElement,
    this.maxSidebar = this.el.nativeElement,
    this.miniSidebar = this.el.nativeElement,
    this.roundout = this.el.nativeElement,
    this.maxToolbar = this.el.nativeElement,
    this.logo = this.el.nativeElement,
    this.content = this.el.nativeElement,
    this.moon = this.el.nativeElement,
    this.sun = this.el.nativeElement
   }

  ngOnInit(): void {
  }

  openNav() {
    this.sidebar = document.querySelector('aside')!;
    this.maxSidebar = document.querySelector('.max')!;
    this.miniSidebar = document.querySelector('.mini')!;
    this.roundout = document.querySelector('.roundout')!;
    this.maxToolbar = document.querySelector('.max-toolbar')!;
    this.logo = document.querySelector('.logo')!;
    this.content = document.querySelector('.content')!;
    this.moon = document.querySelector('.moon')!;
    this.sun = document.querySelector('.sun')!;

    if(this.sidebar.classList.contains('-translate-x-48')){
      this.sidebar.classList.remove('-translate-x-48')
      this.sidebar.classList.add('translate-x-none')
      this.maxSidebar.classList.remove('hidden')
      this.maxSidebar.classList.add('flex')
      this.miniSidebar.classList.remove('flex')
      this.miniSidebar.classList.add('hidden')
      this.maxToolbar.classList.add('translate-x-0')
      this.maxToolbar.classList.remove('translate-x-24','scale-x-0')
      this.logo.classList.remove('ml-12')
      this.content.classList.remove('ml-12')
      this.content.classList.add('ml-12','md:ml-60')
    }else{
      this.sidebar.classList.add('-translate-x-48')
      this.sidebar.classList.remove('translate-x-none')
      this.maxSidebar.classList.add('hidden')
      this.maxSidebar.classList.remove('flex')
      this.miniSidebar.classList.add('flex')
      this.miniSidebar.classList.remove('hidden')
      this.maxToolbar.classList.add('translate-x-24','scale-x-0')
      this.maxToolbar.classList.remove('translate-x-0')
      this.logo.classList.add('ml-12')
      this.content.classList.remove('ml-12','md:ml-60')
      this.content.classList.add('ml-12')
    }
  }

  // setDark(val){
  //   if(val === "dark"){
  //       document.documentElement.classList.add('dark')
  //       this.moon.classList.add("hidden")
  //       this.sun.classList.remove("hidden")
  //   }else{
  //       document.documentElement.classList.remove('dark')
  //       this.sun.classList.add("hidden")
  //       this.moon.classList.remove("hidden")
  //   }
  // }
}
