import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'], 
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
  currentPath:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.currentPath=this.router.url.split('/')[1];
  }
 
  routerNavigation(pageName){
    this.router.navigate([pageName]);
  }


}
