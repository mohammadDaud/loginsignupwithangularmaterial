import { Component, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-homelayout',
  templateUrl: './homelayout.component.html',
  styleUrls: ['./homelayout.component.css']
})
export class HomelayoutComponent implements OnInit {

  SidebarOpened = true;
  constructor() { }

  ngOnInit(): void {
  }
  sideBarToggler(event: Event) {
    this.SidebarOpened = !this.SidebarOpened;
  }

}
