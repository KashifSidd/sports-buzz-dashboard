import { Component, HostListener } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sportsbuzz-web';
  isDesktopScreen: boolean;

  constructor(private spinner:NgxSpinnerService) {}

  ngOnInit(): void {
    
    if (typeof window !== 'undefined') {
      console.log('You are on the browser,You are good to go');
      window.innerWidth >=769 ? this.isDesktopScreen = true : this.isDesktopScreen = false;
      } else {
      console.log('You are on the server,Cannot execute')
     }     
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (typeof window !== 'undefined') {
      console.log('You are on the browser,You are good to go');
      window.innerWidth >=769 ? this.isDesktopScreen = true : this.isDesktopScreen = false;
      } else {
      console.log('You are on the server,Cannot execute')
     }
  }
}
