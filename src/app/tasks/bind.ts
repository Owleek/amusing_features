//@ts-ignore
if (!Function.prototype.customBind) {
    //@ts-ignore
    Function.prototype.customBind = function (baseThis, ...args) {
        const currentFN = this
        //@ts-ignore
        return function(...finalArgs) {
            currentFN.call(baseThis, ...args, ...finalArgs)
        }
    }
}