import { useRef, useState } from "react"
import TailSelect from "../components/TailSelect"
import SubwayBox from "./SubwayBox"

export default function Subway() {
  //json파일 구분할 변수 지정하기 
  //const [sarc, setSarc] = useState
  const [data, setTdata] = useState([]);

  // getYesterday 사용하여 dt 설정하기
  
  const selAreaRef = useRef();
  
  // 같으면 sarea[current.value] 
  const handleArea = () => {
    console.log(selAreaRef.current.value);
    if (sel1Ref.current.value ==  ""){};

  }  

  const sel1Ref = useRef();
  const sel2Ref = useRef();

  
  // 주소에서
  // 필요한 item data만 가져오기
  const getFetchDdata = async () => {
    const apikey= import.meta.env.VITE_API_KEY;
    const baseurl = `/api/6260000/IndoorAirQuality/getIndoorAirQualityByStation?`;
    let url= `${baseurl}serviceKey=${apikey}&pageNo=1&numOfRows=5&resultType=xml&controlnumber=${dt}&areaIndex=${selAreaRef}`

    console.log(url);

    try {
      const resp = await fetch(url);
      const data = await resp.json();

      setTdata(data.items.item)
    } catch (error){
      console.log(error)
    }

  }

    
  return (
    <div className="w-full flex justify-start items-center">
      <h1 className="w-full flex text-2xl font-bold p-5 m-4 "> 측정소 선택</h1>
        <div className="w-full">
          <TailSelect id="sel1"
                      ref={selAreaRef}
                      title="측정소"
                      opk={Object.keys(sarea)}
                      opv={Object.values(sarea)}
                      onHandle={handleArea}
          /> 
        </div>
        <div>
        <SubwayBox className="w-full flex-1"
                   />
        </div>
    </div>
  )
}


// find map filter
//<select>
    //  <option> -- </option> value
    //      event  onchange 이벤트로 잡음. 이때 발생한 값
    //      data. array형식 
    //   for문 대신  (.map  )으로 option get
    //                          코드 갯수 만큼 option 여러개 도출됨.
    //                            코드의 value를 map으로 잡아서 배열 
    //   () => {return }

    //    sarea.map((i) => {obj})
    //    
    // pm10~ co2 object의 코드만큼 .map item의 c
    //            object.keys(scode).map( c => item(c))
    
    // 짝수, 홀수로 색 변경 -> 클래스명 전체로 색 
    // 정렬(sort)하여 시간대 설정 control number 
    