import { useParams } from "react-router-dom"

export default function RoutePage1() {
  const {item1, item2, item3} = useParams();

  return (
    <div>
      RoutePage1
      {item1}{item2}{item3}
    </div>
  )
}
