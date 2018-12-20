// index.js
const h = map=>({
    get: (target, name)=>{
        if(map[name] && !target[name]) target[name] = require(map[name])
        return target[name]
    }
})
const f = map=>new Proxy({}, h(map))
module.exports = f
