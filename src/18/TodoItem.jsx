import { useAtom } from "jotai"
import { useSetAtom } from "jotai";
import TailButton from "../components/TailButton"
import { todosAtom } from "./atomsTodo"
import { useState } from "react";


export default function TodoItem({todo}) {
    const setTodos = useSetAtom(todosAtom);
    const [isEdit, setIsEdit] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    
    // Re
    // prev.map
    // 현재 id값과 todo.id값 비교 , 같으면 완료배열 앞에 추가/ 아니면 미완료 배열 앞에 추가.
    // checked는 자동으로 변경 됨. 
    const handleToggle = () => {
        setTodos(
            prev => prev.map( t => t.id == todo.id ?    
                            {...t, completed : !todo.completed} : t)

        );
    }

    // 저장
    const handleSave = () => {
        setTodos(
            prev => prev.map( t => t.id == todo.id ?    
                            {...t, text : editText} : t)

        );
    }

    // 취소
    const handleCancel = () => {
        setEditText(todo.text)
    }
    
    //삭제
    //필터로 t.id가 != todo.id 인것만 넣음
    const handleDelete = () => {
       setTodos(
            prev => prev.filter(t => t.id != todo.id)
       )
        }

  return (
    <div className="w-full max-w-3xl flex justify-center items-center my-4">
        <input type="checkedbox"  
                className="p-2 border border-amber-50 rounded-sm"  
                checked={todo}
                onChange={handleToggle}/>
        <TailButton caption="수정" color="lime" onHandle={
        isEdit ?  <input type="text" className="flex-1 p-2 border border-amber-50
                                      rounded-sm " />   && {handleSave} 
                :  {handleCancel} }/>
        <TailButton caption="삭제" color="orange" onHandle={handleDelete} />
    </div>
  )
}

//Atom함수들 사용 시, atomsTodo.js에 있는 (파라미터, 변수 등등 )만 사용가능. 

// 수정버튼 : 수정상태 인지 아닌지 구분.
       // ( 수정상태O -> text input 상자 나타나기,  
       //                저장 -> atom 배열에 추가됨 )

       //                취소 -> handleCancel, setEditText


       // ( 삭제        -> atom 배열에서 삭제됨 )

       // 새로고침 -> 원복 



// 글에 선 긋기  /  {` ${}`} 중괄호 -> 백틱 -> 달러 -> 중괄호
// <span ClassName={`flex-1 p-2 ${todo.completed ? " line-through"
//                                  : ""}`}>
// {todo.text}
// </span>

// onHandle= ( () => { isEdit? handleSave ? {} : handleCancel})
//             

//  onHandle=((handleDelete) => {})