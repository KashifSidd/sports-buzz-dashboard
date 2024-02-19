import { NgxSpinnerService } from 'ngx-spinner';
import { Location } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../services/news.service';
import { News } from './model/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  topStories: News[] = [];
  latestNews: News[] = [];
  latestNewsOffset: number = -5;
  latestNewsLimit: number = 5;
  sportsNewsCricketOffset: number = -5;
  sportsNewsFootballOffset: number = -5;
  sportsNewsTennisOffset: number = -5;
  sportsNewsLimit: number = 5;
  isSportsNews: boolean;
  sportName: string = 'cricket';
  isDesktopScreen:boolean;
  sportsNewsData: { cricket: News[], football: News[], tennis: News[] } = {cricket: [], football: [], tennis: []};

  constructor(private newsService: NewsService, private router: Router, private activeRoute: ActivatedRoute, private location:Location, private spinner:NgxSpinnerService) { 
    this.activeRoute.data.subscribe(data => {
      if (data.kind === 'sports-news') {
        this.isSportsNews = true;
      }
    });
    const state: any = this.location.getState();
    if (state.sportName) {
      this.sportName = state.sportName;
    }
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      console.log('You are on the browser,You are good to go');
      window.innerWidth >=769 ? this.isDesktopScreen = true : this.isDesktopScreen = false;
      } else {
      console.log('You are on the server,Cannot execute')
     }
    if(this.isSportsNews) {
      this.getCricketNewsData();
      this.getFootballNewsData();
      this.getTennisNewsData();
    } else {
      this.getTopStoriesData();
      this.getLatestNewsData();
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

  /**
   * Method that makes api call for top-stories data
   */
  getTopStoriesData() {
    this.spinner.show();
     setTimeout(()=>{
      this.spinner.hide()},3000)
    this.newsService.getTopStories().subscribe(res => {
      this.topStories = [];
      for (const i of res) {
        this.topStories.push(News.fromJson(i));
      }
    });
  }

  /**
   * Method that makes api call for latest news data
   */
  getLatestNewsData() {
    this.spinner.show();
     setTimeout(()=>{
      this.spinner.hide()},3000)
    this.latestNewsOffset += 5;
    const data = {
      offset: this.latestNewsOffset,
      limit: this.latestNewsLimit
    }
    this.newsService.getLatestNews(data).subscribe(res => {
      for (const i of res) {
        this.latestNews.push(News.fromJson(i));
      }
    });
  }

  /**
   * Method that makes api call for cricket news data
   */
  getCricketNewsData() {
    this.spinner.show();
     setTimeout(()=>{
      this.spinner.hide()},3000)
    this.sportsNewsCricketOffset += 5;
    const data = {
      offset: this.sportsNewsCricketOffset,
      limit: this.sportsNewsLimit
    }
    this.newsService.getCricketNews(data).subscribe(res => {
      for (const i of res) {
        this.sportsNewsData.cricket.push(News.fromJson(i));
      }
    });
  }

  /**
   * Method that makes api call for football news data
   */
  getFootballNewsData() {
    this.spinner.show();
     setTimeout(()=>{
      this.spinner.hide()},3000)
    this.sportsNewsFootballOffset += 5;
    const data = {
      offset: this.sportsNewsFootballOffset,
      limit: this.sportsNewsLimit
    }
    this.newsService.getFootballNews(data).subscribe(res => {
      for (const i of res) {
        this.sportsNewsData.football.push(News.fromJson(i));
      }
    });
  }

  /**
   * Method that makes api call for tennis news data
   */
  getTennisNewsData() {
    this.spinner.show();
     setTimeout(()=>{
      this.spinner.hide()},3000)
    this.sportsNewsTennisOffset += 5;
    const data = {
      offset: this.sportsNewsTennisOffset,
      limit: this.sportsNewsLimit
    }
    this.newsService.getTennisNews(data).subscribe(res => {
      for (const i of res) {
        this.sportsNewsData.tennis.push(News.fromJson(i));
      }
    });
  }

  /**
   * Method that calls news-data methods based on selected sportName
   */
  loadMoreSportsNews() {
    if (this.sportName === 'cricket') {
      this.getCricketNewsData();
    } else if (this.sportName === 'football') {
      this.getFootballNewsData();
    } else {
      this.getTennisNewsData();
    }
  }

  /**
   * Method that navigates to detailed-news component with
   * data which is passed through routing
   * @param data 
   */
  navigateToDetailedNews(data) {
    this.router.navigateByUrl('news/' + data.slug, {state: data})
  }
}
