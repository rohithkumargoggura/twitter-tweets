import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class TwitterService {
  api_url = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  getRedirectUrl() {
    return this.http.get(`http://localhost:3000/connect`);
  }
  saveAccessToken(oauthToken: string, oauthVerifier: string) {
    return this.http.get(
      `http://localhost:3000/saveAccessTokens?oauth_token=${oauthToken}&oauth_verifier=${oauthVerifier}`
    );
  }

  getTimeline() {
    const headers = new HttpHeaders({ "content-type": "application/json" });
    headers.append("access_token", "abcd");
    return this.http.get("http://localhost:3000/home_timeline").pipe(
      map(data => {
        console.log("data", data);
        return data;
      })
    );
    // return this.http
    //   .get<any[]>(this.api_url + '/home_timeline')
    //   .pipe(map(data => data));
  }

  getMentions() {
    const headers = new HttpHeaders({ "content-type": "application/json" });
    headers.append("access_token", "abcd");
    return this.http.get("http://localhost:3000/mentions_timeline").pipe(
      map(data => {
        console.log("data", data);
        return data;
      })
    );
    // return this.http
    //   .get<any[]>(this.api_url + '/mentions_timeline')
    //   .pipe(map(data => data));
  }
}
