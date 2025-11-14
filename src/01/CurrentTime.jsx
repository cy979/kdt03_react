
export default function CurrentTime() {

    let ct = new Date();

    return (
        <div className="text-4xl font-bold text-white bg-black flex flex-col items-center justify-center">
            <span class="relative flex size-100">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex size-100 rounded-full bg-sky-500">
                    {ct.toLocaleTimeString()}
                </span>
            </span>
        </div>
    )
}
