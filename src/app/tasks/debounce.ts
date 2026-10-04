//debounce

function debounce(callback: () => {}, time: number) {
    let timeOut: number | null = 1

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

debouncedLog('asd')
debouncedLog('werw')
debouncedLog('svsss')

//throttle

function throttle(callback: () => {}, time: number) {
    let canCall = false
    let last_timestamp = performance.now()
    

    let interval = setInterval(() => {
        const current_timestamp = performance.now()
        if (current_timestamp - last_timestamp >= time) {
            last_timestamp = current_timestamp
            canCall = true
        }
    }, time)
 

    return (...rest: unknown[]) => {    
        if (!canCall) return
        //@ts-ignore
        callback(...rest)
        canCall = false
    }
}

const anotherlog = (srt: string) => {
    console.log(srt)
}

//@ts-ignore
const throttledLog = throttle(anotherlog, 1000)
setInterval(() => throttledLog("loasdasdas"), 10)