const express = require('express');
const Twitter = require('twit');
 
const app = express();
const client = new Twitter({
  consumer_key: 'Consumer Key Here',
  consumer_secret: 'Consumer  Secret  Here',
  access_token: 'Access Token Here',
  access_token_secret: 'Token  Secret Here'
});
 
app.get('/home_timeline', (req, res) => {
    const params = { tweet_mode: 'extended', count: 10 };
   
    client
      .get(`statuses/home_timeline`, params)
      .then(timeline => {
         
        res.send(timeline);
      })
      .catch(error => {
      res.send(error);
    });
      
});
 
app.use(require('cors')());
app.use(require('body-parser').json());

app.get('/mentions_timeline', (req, res) => {
    const params = { tweet_mode: 'extended', count: 10 };
   
    client
      .get(`statuses/mentions_timeline`, params)
      .then(timeline => {
       
        res.send(timeline);
      })
      .catch(error => {
      res.send(error);
    });
      
});

app.post('/post_tweet', (req, res) => {
 
  tweet = {status:"Hello world"};
     
    client
      .post(`statuses/update`, tweet)
      .then(timeline => {
        console.log(timeline);
         
        res.send(timeline);
      })
 
     .catch(error => {
      res.send(error);
    });
       
    
});
 
app.listen(3000, () => console.log('Server running'));