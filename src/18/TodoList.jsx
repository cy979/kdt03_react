import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"
import { useAtomValue } from "jotai"
import { todosAtom, completedAtom, incompletedAtom  } from "./atomsTodo"


export default function TodoList() {
    const todos = useAtomValue(todosAtom);
    const completed = useAtomValue(completedAtom)
    const incomplete = useAtomValue(incompletedAtom)

    

  return (
    <div className="w-full h-full items-start text-center border ">
      <h1 className="font-bold text-2xl mt-2" >할일목록</h1>
      <div className="w-4/5 h-8 flex bg-amber-100  justify-center items-center m-2 gap-2">
        <div>전체 : { todos.length }개 |</div>
        <div>완료 : {completed}개 |</div>
        <div>미완료 :{incomplete}개</div>
      </div>
      <TodoInput/>
      {
        todos.map(todo => <TodoItem key ={todo.id} todo={todo}/>)
      }
      <TodoItem />
    </div>
  )
}

//Atom함수들 사용 시, atomsTodo.js에 있는 (파라미터, 변수 등등 )만  사용. 
