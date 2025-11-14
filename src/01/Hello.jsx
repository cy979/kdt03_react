import CurrentTime from "./CurrentTime";

function Hello() {
    let name = '홍길동';
    return (
        <>
            <div className="text-4xl font-bold text-shadow-black">
                Hello React!! {`${name}님 안녕하세요`}
            </div>
            <CurrentTime />
        </>
    )
}
export default Hello;
