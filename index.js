// index.js
const handle = root=>map=>({
    get: (target, name)=>{
        if(!target[name] && map[name]) 
            target[name] = require(`${root}/${map[name]}`)
        return target[name]
    }
})

const req = root=>map=>new Proxy({}, handle(root)(map))

module.exports = req

if(module.parent) return

// sample
const samp = require('./index.js')('./')({
    req:  'index.js'
   ,req2: 'index.js'
})
console.log(`** 1: samp:`, samp)
samp.req
console.log(`** 2: samp:`, samp)
samp.req2
console.log(`** 3: samp:`, samp)
