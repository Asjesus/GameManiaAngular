import { Component, OnInit } from '@angular/core';
import { faFilm, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  iconebotao=faMagnifyingGlass
  constructor() { }

  ngOnInit(): void {
  }

}
