# vue-news

## create project
```
npx @vue/cli create vue-news
```

## routes 설정
- 참고
  - https://router.vuejs.org/kr/guide/#html
- Routes
  ```
  http://localhost:8080/#/ask
  http://localhost:8080/#/news
  http://localhost:8080/#/jobs
  ```

- 라우팅시에 url 에 해시(#)값이 나오지 않게 하려면 아래와 같이 `mode`값을 `history`로 해주면 된다.
  ```js
  const router = new VueRouter({
    mode: 'history',
    routes: []
  });
  ```

## api url
  - https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md
  - News
    - https://api.hnpwa.com/v0/news/1.json
  - Newest
    - https://api.hnpwa.com/v0/newest/1.json
  - Ask
    - https://api.hnpwa.com/v0/ask/1.json
  - Show
    -	https://api.hnpwa.com/v0/show/1.json
  - Jobs
    - https://api.hnpwa.com/v0/jobs/1.json

## 트렌지션
  - 라우터 트렌지션 문서
    > https://router.vuejs.org/guide/advanced/transitions.html#per-route-transition
  - ALL 트렌지션 문서
    > https://vuejs.org/v2/guide/transitions.html
    