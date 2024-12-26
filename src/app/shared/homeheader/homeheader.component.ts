import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TokenserviceService } from 'src/app/services/tokenservice.service';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.css']
})
export class HomeheaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private tokenStorage: TokenserviceService,private router:Router) { }

  ngOnInit() { }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  logout() {
    if(this.tokenStorage.logOut())
    {
      this.router.navigateByUrl('/login');
    }
  }

}
