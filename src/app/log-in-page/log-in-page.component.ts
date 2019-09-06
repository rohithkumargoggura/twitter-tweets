import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TwitterService } from '../twitter.service';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent implements OnInit {

  constructor(private sessionService: TwitterService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  
  }

  saveAccessToken(oauthToken: string, oauthVerifier: string) {
    this.sessionService.saveAccessToken(oauthToken, oauthVerifier).subscribe(res => {
    alert('Token saved');
    })
  }
  redirectToTwitter() {
    this.sessionService.getRedirectUrl().subscribe((res: any) => {
      location.href = res.redirectUrl;
    })
  }

}
