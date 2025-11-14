import TailButton from "../components/TailButton";
import { useSetAtom } from "jotai";
import { todosAtom } from "./atomsTodo";
import { useRef } from "react";

export default function TodoInput() {
    const setTodos = useSetAtom(todosAtom);
    const inRef = useRef();
    
    
    const Add = () => {
      if (inRef.current.value == "") {
        alert("값을 입력해주세요.");
        inRef.current.focus();
        return
      } 

      const newItem = {
        id: Date.now(),
        text: inRef.current.value ,
        completed : false
      }
      setTodos( prev => [newItem, ...prev]);
      inRef.current.value == ""
      inRef.current.focus();
    }


  return (
    <div className="w-full max-w-3xl flex justify-center items-center my-4" >
        <input type="text" 
                ref = {inRef}
                className="flex-1 p-2 border border-amber-50
                                      rounded-sm
                                      focus:outline-none focus:ring-2 focus:ring-blue-200"
             />
                
        <TailButton caption="추가" color="blue" onHandle={Add}/>
    </div>
  )
}
//배열에 새로운 아이템 추가
//이전에 있는 값에 추가

//date.now()

// import { useSetAtom } from "jotai"; 
//  -> 세터만 가져옴

//(상위 영역에서 flex 사용한 경우), flex-1하면 해당 영역 제외한 영역 사이즈 자동으로 잡아줌

//input 사용시 닫는태그 단일 cf) <input />

//push사용 X