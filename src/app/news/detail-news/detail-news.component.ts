import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.scss']
})
export class DetailNewsComponent implements OnInit {

  detailedNews: any;
  postBody: any
  constructor(private location:Location, private domSanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.detailedNews = this.location.getState();
    this.postBody = this.domSanitizer.bypassSecurityTrustHtml(this.detailedNews.postBody);
  }

}
