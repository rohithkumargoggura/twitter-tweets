import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';

@Component({
  selector: 'app-twitter-timeline',
  templateUrl: './twitter-timeline.component.html',
  styleUrls: ['./twitter-timeline.component.css']
})
export class TwitterTimelineComponent implements OnInit {
  myTimeline: any;
  dummyTimeline: any;
  searchEle;
  searchBy;
  searchByID = ['Full Name', 'User Name', 'Location'];
  constructor(private api: TwitterService) { }

  ngOnInit() {
    this.getTwitterTimeline();
    console.log('this.dummyTimeline  ', this.dummyTimeline);
  }
  getTwitterTimeline(): void {
    this.api.getTimeline()
      .subscribe(
        myTimeline => {
          this.myTimeline = myTimeline;
          this.dummyTimeline = this.myTimeline;
          console.log(this.myTimeline);
        });
   }
   onKey() {
     console.log("searchEle", this.searchEle);
     if (this.searchEle) {
       this.myTimeline.data = this.myTimeline.data.filter(item => {
        if (this.searchBy === 'Full Name') {
          return item.full_text.indexOf(this.searchEle) != -1;
        } else if (this.searchBy === 'User Name') {
          return item.user.name.indexOf(this.searchEle) != -1;
        } else if (this.searchBy === 'Location') {
          return item.user.location.indexOf(this.searchEle) != -1;
        }
       });
     } else {
       this.myTimeline = this.dummyTimeline;
     }

   }

}
