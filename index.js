require('dotenv').config()
const express = require('express')
const app = express()

const githubData = {
  "login": "noorshaikh101",
  "id": 40855629,
  "node_id": "MDQ6VXNlcjQwODU1NjI5",
  "avatar_url": "https://avatars.githubusercontent.com/u/40855629?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/noorshaikh101",
  "html_url": "https://github.com/noorshaikh101",
  "followers_url": "https://api.github.com/users/noorshaikh101/followers",
  "following_url": "https://api.github.com/users/noorshaikh101/following{/other_user}",
  "gists_url": "https://api.github.com/users/noorshaikh101/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/noorshaikh101/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/noorshaikh101/subscriptions",
  "organizations_url": "https://api.github.com/users/noorshaikh101/orgs",
  "repos_url": "https://api.github.com/users/noorshaikh101/repos",
  "events_url": "https://api.github.com/users/noorshaikh101/events{/privacy}",
  "received_events_url": "https://api.github.com/users/noorshaikh101/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Noor",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 7,
  "following": 29,
  "created_at": "2018-07-05T09:41:14Z",
  "updated_at": "2024-07-19T15:15:15Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Hi Noor !')
} )

app.get('/login', (req, res) => {
    res.send('<h1>Please Login</h1>')
})

app.get('/github',(req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})