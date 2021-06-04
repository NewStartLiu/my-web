/**
 * 防抖
 * @param {function} fn 执行函数
 * @param {number} delay 延迟
 * @returns 
 */
export const debounce = function (fn, delay) {
    let timer
    return function () {
        const args = [...arguments]
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    }
}

/**
 * 节流
 * @param {function} fn 
 * @param {number} delay 
 * @returns 
 */
export const throttle = function (fn, delay) {
    let timer;
    return function () {
        const args = [...arguments]
        if (!timer) {
            timer = setTimeout(() => {
                timer = null
                fn.apply(this, args)
            }, delay);
        }
    }
}