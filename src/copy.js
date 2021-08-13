export default function liangCopy(obj) {
    let result;
    if (typeof obj === 'object') {
        if (obj === null) {
            result = null;
            return   
        } else if (obj.constructor === RegExp) {
            result = obj;
        } else if(Array.isArray(obj)) {
            result = [];
            for (let i in obj) {
            result.push(liangCopy(obj[i]))
            }
        } else if (obj instanceof Function) {
                result = new Function('return '+ func.toString())()
        } else if (obj instanceof Object) {
            result = {}
            for (let i in obj) {
            result[i] = liangCopy(obj[i])
            }
        }
    } else {
        result = obj;
    }
    return result;
}