import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';
import { TwitterMentionsComponent } from './twitter-mentions/twitter-mentions.component';
import { TweetComponent } from './tweet/tweet.component';


const routes: Routes = [
  {
    path: 'twitter_timeline',
    component: TwitterTimelineComponent
  },
  {
    path: 'twitter_mentions',
    component: TwitterMentionsComponent
  },

  {
    path: 'tweets',
    component: TweetComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
