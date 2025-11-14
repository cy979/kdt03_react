import TailButton from '../components/TailButton'
import { useAtom } from "jotai"
import { cntAtom } from './atomsCnt'

export default function JotaiBt() {
    const [cnt, setCnt] = useAtom(cntAtom);

  return (
    <div className="w-full flex justify-center">
      <TailButton color="blue" caption="증가"  onHandle={() => setCnt(cnt+1)} />
      <TailButton color="orange" caption="감소"  onHandle={() => setCnt(cnt-1)} />
    </div>
  )
}

//useState, useEffect : 부모의 함수까지 같이 전달됨. 자식컴포넌트에서 변경되는것이 X.
//useAtom : 전역변수 사용. 전역변수 자체는 상태변화X, 세터필요X