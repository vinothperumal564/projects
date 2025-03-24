import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  hidden:boolean = false;
  

  click(){
    this.hidden = true;
  }

  save(){
    this.hidden = false;
  }
}
