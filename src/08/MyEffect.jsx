import {useState, useEffect} from 'react'
import TailButton from '../components/TailButton';

//useState : 변수를 리액트가 관리.
//useEffect : 함수를 관리. 실행 시점. ( 인수: 1) (없음x) 화면이 업데이트가 되면 실행. / 2) 빈 배열[] -초기값, 처음 마운트 될 때만 실행 / 3) [pn]state변수(변수지정. 상태변화))

export default function MyEffect() {
    const [isActive, setIsActive] = useState(false);
    const [tag, setTag] = useState();
    
    const handleClick = () => {
        setIsActive(!isActive);
        console.log("handleClick", isActive);
        }

    
    //함수 Body 안에서는 if 사용가능.
    const handleShow = () => {
        if (isActive)
            setTag(<h1>상태 on</h1>);
        else
            setTag(<h1>상태off</h1>);
    }
    //useEffect (함수괄호, 배열[]/  dependency Array . 배열에 따라 실행.)
    // 
    
    useEffect(() => {
        //컴포넌트 생성시 한번 실행. 처음 마운트 될 때만 실행.

        console.log("컴포넌트 생성")
    }, []);
    
    useEffect(() => {
        //state 변수가 변경 될 때/ 배열에 포함 된 값이 변경될 때마다, 첫번째인자로 전달 된 함수가 실행됨.
 
        console.log("useEffect", isActive);
    }, [isActive]);

    useEffect(() => {
        // 상태가 변결 될 때 마다 ( 이 경우 ex) isActiv, 태그) 
        console.log("useEffect 상태가 변경될 때", isActive);
    });

    

  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div>{tag}</div>
        { 
        isActive ? <TailButton color="blue" caption="useEffect" onHandle={handleClick} />
        : <TailButton color="orange" caption="useEffect" onHandle={handleClick} />
        }
        <TailButton color="lime" caption="태그변경" onHandle={handleShow} />
    </div>
  )
}
