const BALLCOLOR = [
    "bg-blue-500",
    "bg-orange-500",
    "bg-lime-500",
    "bg-amber-500",
    "bg-yellow-500",
    "bg-brown-500"
]

export default function TailBall({n}) {
    //const n 
  return (
    <div className={`w-20 h-20 rounded-full 
                    text-xl font-bold
                    text-white ${BALLCOLOR[Math.floor(n/10)]}
                    m-2
                    flex justify-center items-center`}>
      {n}
    </div>
  )
}

//숫자, 숫자-분류되면서 색도 부여됨.