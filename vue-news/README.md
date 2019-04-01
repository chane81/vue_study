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