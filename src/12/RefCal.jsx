import TailButton from "../components/TailButton";
import { useRef, useEffect } from "react";

export default function RefCal() {
    //input 요소 ref 연결
    const txt1Ref = useRef();
    const txt2Ref = useRef();
    const txt3Ref = useRef();
    const opRef = useRef();


    //첫번째 input에 포커스가 놓이면
    const handleTxt1 = () => {
        txt1Ref.current.value = "";
        txt2Ref.current.value = "";
        txt3Ref.current.value = "";
    }

    //버튼이 눌러지면 / prevent로 막아야 자기 자신으로 돌아오지 않음.
    // current?.value ?? ""; -> undefined가 되면 "" 공백.
    const handleClick = (e) => {
        e.preventDefault();

        let num1 = txt1Ref.current?.value ?? "";
        let num2 = txt2Ref.current?.value ?? "";

        let op = opRef.current?.value ?? "+";

        let num3 ;
        switch (op) {
            case "+" : num3 = Number(num1) + Number(num2) ; break;
            case "-" : num3 = Number(num1) - Number(num2) ; break;
            case "x" : num3 = Number(num1) * Number(num2) ; break;
            case "/" : num2 == "" ? num3 ="오류" : num3=Number(num1) / Number(num2) ; break;
        }

        txt3Ref.current.value = num3;
        
    }

    //컴포넌트가 생성될때 
    useEffect(() => {
    txt1Ref.current.focus() ;
    }, []) ;
    
  return (
    <div className="w-full h-full flex justify-center items-start mt-20">
      <form className="w-9/10 flex justify-center p-4 gap-2 ">
        <input type="number" name="txt1"
        onFocus={handleTxt1}
                ref={txt1Ref}
                className="p-2 text-gray-900 border border-gray-400 rounded-lg bg-gray-50 text-base focus:ring-emerald-500 focus:border-emerald-500" />
        <select ref={opRef} 
                className="p-2 mx-5 g-gray-50 border border-gray-300 text-gray-900 text-lg  bg-gray-50 rounded-lg focus:ring-emerald-500 focus:border-emerald-500">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="x">x</option>
            <option value="/">/</option>
        </select>
        <input type="number" name="txt2"    
                ref={txt2Ref}
                className="w-4/5 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-emerald-500 focus:border-emerald-500" />
        <TailButton color="blue"
                    caption="="
                    onHandle={handleClick}/>
        <input type="text" name="txt3" 
                className="p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 text-base focus:ring-emerald-500 focus:border-emerald-500" 
                ref={txt3Ref} readOnly />
      </form>
    </div>
  )
}
