import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div>
          <header className='bg-blue-600 text-white shadow-md'>
            <nav className='container h-20 mx-auto flex justify-between items-center'>
              <div className='text-2xl font-bold text-blue-50'>KDT03</div>
              <ul className='flex space-x-4'>
                <li >
                  <Link to="/"
                    className='hover:font-bold hover:bg-cyan-200 p-2 rounded-sm'>
                    홈
                  </Link> 
                </li>
                <li className='hover:font-bold'>
                  <Link to="/lotto"
                    className='hover:font-bold hover:bg-cyan-200 p-2 rounded-sm'>
                    로또
                  </Link>
                  <Link to="/box"
                    className='hover:font-bold hover:bg-cyan-200 p-2 rounded-sm'>
                    박스오피스
                  </Link>
                  <Link to="/gallery"
                    className='hover:font-bold hover:bg-cyan-200 p-2 rounded-sm'>
                    관광사진
                  </Link>
                  <Link to="/Festival"
                    className='hover:font-bold hover:bg-cyan-200 p-2 rounded-sm'>
                    부산축제
                  </Link>
                  <Link to="/Charge"
                    className='hover:font-bold hover:bg-cyan-200 p-2 rounded-sm'>
                    전기차 충전소 정보
                  </Link>
                  <Link to="/TodoList"
                      className='hover:font-bold hover:bg-cyan-200 p-2 rounded-sm'>
                      할일목록
                  </Link>
                  <Link to="/Subway"
                      className='hover:font-bold hover:bg-cyan-200 p-2 rounded-sm'>
                       지하철대기정보
                  </Link>

                </li>
              </ul>
            </nav>
          </header>
    </div>
  )
}
