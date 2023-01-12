import { useEffect, useState } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:10615/api/todo';

function App() {
  const [todoList, setTodoList] = useState(null);

  const fetchData = async () => {
    /* axios async 사용 */
    const res = await axios.get(SERVER_URL);
    setTodoList(res.data);

    /* axios promise 사용
    axios
      .get(SERVER_URL)
      .then((res) => setTodoList(res.data));
    */

    /* fetch 사용 
    fetch(SERVER_URL)
      .then((res) => res.json())
      .then((data) => setTodoList(data));
    */
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;

    await axios.post(SERVER_URL, { text, done }); //axios는 json을 자동으로 처리해줌
    fetchData();

    // fetch(SERVER_URL, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     text,
    //     done,
    //   }),
    // }).then(() => fetchData());
  };

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form onSubmit={onSubmitHandler}>
        <input name="text" />
        <input name="done" type="checkbox" />
        <input type="submit" value="추가" />
      </form>
      {todoList?.map((todo) => {
        /* todoList? 여기에서 ?붙인이유는 해당값이 null이면 undefined처리하고 있으면 map실행 */
        return (
          <div key={todo.id} style={{ display: 'flex' }}>
            <div>{todo.id}</div>
            <div>{todo.text}</div>
            <div>{todo.done ? 'Y' : 'N'}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
