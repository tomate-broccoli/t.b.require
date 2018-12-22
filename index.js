// index.js
const h = root=>map=>({
    get: (target, name)=>{
        if(!target[name] && map[name]) 
            target[name] = require(`${root}/${map[name]}`)
        return target[name]
    }
})
const f = root=>map=>new Proxy({}, h(root)(map))
module.exports = f
