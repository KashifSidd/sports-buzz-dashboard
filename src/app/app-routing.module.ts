import { IccRankingsGenderComponent } from './icc-rankings-gender/icc-rankings-gender.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { PlayersComponent } from './view-details/players/players.component';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffiliateProgramComponent } from './affiliate-program/affiliate-program.component';
import { EditorialStandardComponent } from './editorial-standard/editorial-standard.component';
import { HomeComponent } from './home/home.component';
import { ViewAllMatchesComponent } from './view-all-matches/view-all-matches.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { WriteForUsComponent } from './write-for-us/write-for-us.component';
import { MoreComponent } from './more/more.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { NewsComponent } from './news/news.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MasterClassComponent } from './master-class/master-class.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { PoliciesComponent } from './policies/policies.component';
import { DetailNewsComponent } from './news/detail-news/detail-news.component';
import { ExpertAnalysisComponent } from './master-class/expert-analysis/expert-analysis.component';
import { CorrectionsPolicyComponent } from './policies/corrections-policy/corrections-policy.component';
import { EthicsPolicyComponent } from './policies/ethics-policy/ethics-policy.component';
import { FactCheckingPolicyComponent } from './policies/fact-checking-policy/fact-checking-policy.component';
import { PrivacyPolicyComponent } from './policies/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './policies/terms-of-use/terms-of-use.component';
// import { NewsBlockComponent } from './news/news-block/news-block.component';

const routes: Routes = [ 
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path: 'view-details',
    // loadChildren: ()=> import('./view-details/view-details.module').then(m=> m.ViewDetailsModule)
    component: ViewDetailsComponent
  },
  {
    path:'players',
    component:PlayersComponent
  },
  {
    path: 'write-for-us',
    component:WriteForUsComponent
  },
  {
    path: 'view-all-matches',
    component: ViewAllMatchesComponent
  },
  {
    path:'editorial-standards',
    component:EditorialStandardComponent
  },
  {
    path:'affiliate-program',
    component:AffiliateProgramComponent
  },
  {
    path:'more',
    component: MoreComponent
  },
  // {
  //   path:'favourite',
  //   component: FavouriteComponent
  // },
  {
    path:'icc-rankings',
    component: FavouriteComponent
  },
  {
    path:'icc-rankings-gender',
    component: IccRankingsGenderComponent
  },
  
  {
    path: 'news', data: {kind: 'breaking-news'},
    component: NewsComponent
  },
  {
    path: 'sports-news', data: {kind: 'sports-news'},
    component: NewsComponent
  },

  {
    path:'news/:slugId',
    component: DetailNewsComponent
  },
  {
    path:'contact-us',
    component: ContactUsComponent
  },
  {
    path:'sign-up',
    component: SignUpComponent
  },
  {
    path:'expert-analysis',
    component: ExpertAnalysisComponent
    },
  {
    path:'about-us',
    component: AboutUsComponent
  },
  // {
  //   path:'player-profile',
  //   component: PlayerProfileComponent
  // },
  {
    path:'policies',
    component: PoliciesComponent
  },
  {
    path:'corrections-policy',
    component: CorrectionsPolicyComponent
  },
  {
    path:'ethics-policy',
    component: EthicsPolicyComponent
  },
  {
    path:'fact-checking-policy',
    component: FactCheckingPolicyComponent
  },
  {
    path:'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path:'terms-of-use',
    component: TermsOfUseComponent
  }
  // {
  //   path:'news/news-block',
  //   component: NewsBlockComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
