import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {

  isGridView:boolean=true;
  isListView:boolean;
  showViewButton:boolean=true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.innerWidth <=320 ? this.showViewButton = false : this.showViewButton = true;
  }
  showGridView(){
    this.isGridView=true;
    this.isListView=false;
  }
  showListView(){
    this.isListView=true;
    this.isGridView=false;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (typeof window !== 'undefined') {
      console.log('You are on the browser,You are good to go');
      window.innerWidth <=320 ? this.showViewButton = false : this.showViewButton = true;
      } else {
      console.log('You are on the server,Cannot execute')
     }
  }

  /**
   * Method that navigates to news component
   * @param sportName 
   */
  navigateToSportsNews(sportName: string) {
    this.router.navigate(['sports-news'], {state: {sportName}})
  }
}
