import MyDiv3 from "./MyDiv3" ;
//export default function MyDiv2(probs) {
export default function MyDiv2({dv1, dv2, dv3}) {
    return (
        <div className="w-9/10 h-9/10
                        bg-lime-500 text-2xl font-bold text-white
                        p-10 m-10
                        flex flex-col justify-start items-start">
            <h1>{dv1} &gt; {dv2}</h1>
            <MyDiv3 d1={dv1} d2={dv2} d3={dv3} />
        </div>
    )
}      

