import Current from './Current';

function Hello() {
    let name = '홍길동';
    
    return (
        <>
        <div className="text-4xl font-bold text-white bg-black flex flex-col items-center justify-center">
            현재시간 :
            <span class="relative flex size-100">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex size-100 rounded-full bg-sky-500">{new Date().toLocaleTimeString()}
                 </span>
            </span>
        </div>
        </>
    )
}
export default Hello;
                