function debounce(callback: () => {}, time: number) {
    let timeOut: number | null = null

    function deffferedCall (args: unknown[]) {
        timeOut = setTimeout(() => {
            // @ts-ignore
            callback(...args)
            clearTimeout(timeOut!)
            timeOut = null
        }, time)
    }

    return (...rest: unknown[]) => {    
        if (timeOut) {
            clearTimeout(timeOut)
            timeOut = null
            deffferedCall(rest)
            return
        }

        deffferedCall(rest)
    }
}


const log = (srt: string) => {
    console.log(srt)
}

//@ts-ignore
const debouncedLog = debounce(log, 1)

log('1')
log('2')
log('3')

