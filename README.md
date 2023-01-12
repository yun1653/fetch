# fetch, axios 사용 예시

client : react로 서버를 구성해서 포트 5000번으로 localhost에 띄운다.

server : express 이용해서 서버를 구성해서 포트 10165번으로 서버를 구동시킨다.

<hr />

- client 에서 fetch, axios를 이용해서 서버로부터 데이터를 가져오거나(get) 데이터를 보내서 생성시키는(post) 작업을 해본다.

- client는 axios, fetch 이용해서 서버로부터 데이터를 불러와서 변수에 저장한다. 이 과정에서 setTodoList(todoList)를 사용하여 저장한다. 변수가 바뀌었으므로 다시 렌더링이 이루어진다.  
  그렇게되면 다시 axios나 fetch가 서버로부터 데이터를 불러온다. 변수를 저장한다. 변수가 바뀌었으니 다시 렌더링 된다. <u>브라우저는 무한루프에 빠지게 된다.</u>  
  이를 피하기 위해 <b>useEffect(()=>{}[])</b>를 사용해서 한번만 불러오게 했다.

- 서버와 클라이언트의 포트가 다르므로 브라우저의 Origin 정책에 위배되므로 이를 해결하기 위해 server측에서 CORS 라이브러리 사용.
  <br/>  
  <br/>

_[참고 영상 : 라매개발자]_  
_https://www.youtube.com/watch?v=d6suykcsNeY_
