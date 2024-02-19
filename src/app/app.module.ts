import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { WriteForUsComponent } from './write-for-us/write-for-us.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from 'src/material.module';
import { CommonModule } from '@angular/common';
import { AffiliateProgramComponent } from './affiliate-program/affiliate-program.component';
import { EditorialStandardComponent } from './editorial-standard/editorial-standard.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ViewAllMatchesComponent } from './view-all-matches/view-all-matches.component';
import { PlayersComponent } from './view-details/players/players.component';
import { FooterComponent } from './footer/footer.component';
import { MoreComponent } from './more/more.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { MatchFilterPipe } from './pipes/match-filter.pipe';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MasterClassComponent } from './master-class/master-class.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { PoliciesComponent } from './policies/policies.component';
import { HttpRequestInterceptor } from './core/http-request-interceptors';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DetailNewsComponent } from './news/detail-news/detail-news.component';
import { ExpertAnalysisComponent } from './master-class/expert-analysis/expert-analysis.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { IccRankingsGenderComponent } from './icc-rankings-gender/icc-rankings-gender.component';
import { PrivacyPolicyComponent } from './policies/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './policies/terms-of-use/terms-of-use.component';
import { FactCheckingPolicyComponent } from './policies/fact-checking-policy/fact-checking-policy.component';
import { EthicsPolicyComponent } from './policies/ethics-policy/ethics-policy.component';
import { CorrectionsPolicyComponent } from './policies/corrections-policy/corrections-policy.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
// import { NewsBlockComponent } from './news/news-block/news-block.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WriteForUsComponent,
    HeaderComponent,
    EditorialStandardComponent,
    AffiliateProgramComponent,
    ViewDetailsComponent,
    ViewAllMatchesComponent,
    PlayersComponent,
    FooterComponent,
    MoreComponent,
    FavouriteComponent,
    MatchFilterPipe,
    LoginComponent,
    NewsComponent,
    ContactUsComponent,
    SignUpComponent,
    MasterClassComponent,
    AboutUsComponent,
    PlayerProfileComponent,
    PoliciesComponent,
    DetailNewsComponent,
    MasterClassComponent,
    ExpertAnalysisComponent,
    IccRankingsGenderComponent,
    PrivacyPolicyComponent,
    TermsOfUseComponent,
    FactCheckingPolicyComponent,
    EthicsPolicyComponent,
    CorrectionsPolicyComponent,
    // NewsBlockComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxSpinnerModule,
    NgxUiLoaderHttpModule.forRoot({showForeground:true,}),
    NgCircleProgressModule.forRoot({
      // set defaults here
      outerStrokeWidth: 10,
      innerStrokeWidth: 0,
     }),
     ToastrModule.forRoot({
      timeOut: 2000,
    }),
     ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  exports: [
    HeaderComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
