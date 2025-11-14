//import { todosAtom } from "./atomsTodo";
import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"
import { useState, useEffect, useRef } from "react"

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState(0);
  const [incomplete, setIncomplete] = useState(0);

  const inRef = useRef();

  const handleSave = (newItem) => {
    setTodos(newItem);
    localStorage.setItem("todo", JSON.stringify(newItem));

  }

   const getTodos = async () => {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
  
      const resp = await fetch(`${supabaseUrl}/rest/v1/todos?select=*order=id.desc`, {
        method: 'GET',
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
        }
      });
  
      if (resp.ok) {
        const data = await resp.json();
        setTodos(data);
      } else {
        console.error('Error fetching todos:', resp.statusText);
        setTodos([]);
      }
    }


  useEffect(() => {

    // const newItem = {
    //   id: 1,
    //   text: "리액트 공부",
    //   completed: false
    // }

    // //JSON 라이브러리 사용
    // // 자바스크립트 객체 -> 문자열 (setter)
    // localStorage.setItem("todo", JSON.stringify(newItem));

    //console.log(localStorage.getItem("todo"));
    // 문자열 -> 자바스크립트 객체 (getter) , string->object로 가져오기
    const localTodos = JSON.parse(localStorage.getItem("todo")) || [];
    setTodos(localTodos);

    //console.log(localStorage.getItem("todo"));
  }, []);

  //todos 가 있으므로 setC, setIc 생성가능
  // todos 여부로 
  useEffect(() => {

    setCompleted(todos.filter(todo => todo.completed).length);
    setIncomplete(todos.filter(todo => !todo.completed).length);
  }, [todos]);


  return (
    <div className="w-full flex flex-col justify-start items-center ">
      <h1 className="w-full max-w-3xl font-bold text-center mt-2" >할일목록(Superbase Fetch함수)</h1>
      <div className="w-full max-w-3xl p-5 my-2 font-bold border bg-amber-100">
        전체 : {todos.length}개 |
        완료 : {completed}개 |
        미완료 :{incomplete}개
      </div>
      <TodoInput todos={todos} setTodos={handleAdd} />
      {
        // map으로 가져옴 TodoItem의 todos, setTodos        
        todos && todos.map(todo => <TodoItem key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={handleAdd} />)
      } 
      <div className="w-full max-w-3xl flex justify-center items-center my-4">
              {
              isEdit ? <>
                        <TailButton color="lime" 
                              caption="저장"
                              onHandle={handleSave} />
                        <TailButton color="orange" 
                              caption="취소"
                              onHandle={handleCancel} />
                       </>
                     : <>
                        <TailButton color="lime" 
                              caption="수정"
                              onHandle={handleToggle} />
                        <TailButton color="orange" 
                              caption="삭제"
                              onHandle={handleDelete} />
                       </>
            }
          </div>
    </div>
  )
}
//TodoItem 중복표기 문제

//Atom함수들 사용 시, atomsTodo.js에 있는 (파라미터, 변수 등등 )만  사용.

// localhost로 변환
// (txt형식으로 저장 -> 객체 ) JSON.parse 사용
// props로 전달 onHandle 하면 부모 컴포넌트의 세터에서 가져오도록.
// setTodos 배열 앞으로 추가
