const crypto = require('crypto');
const { type } = require('os');

function genID(){
    return crypto.randomUUID()
}

function genHandle(){
    return `h${crypto.randomUUID().replaceAll("-","g")}`
}

function genMulID(lot){
    let data = ""
    for (let i = 0; i < lot; i++){
        if (data == ""){
            data +=`${genID()}`
        } else {
        data += `\n${genID()}`
        }
    }
    return data
}

function genMulHandles(lot){
    let data = ""
    for (let i = 0; i < lot; i++){
        if (data == ""){
            data +=`${genHandle()}`
        } else {
        data += `\n${genHandle()}`
        }
    }
    return data
}

module.exports = {genID, genHandle, genMulID, genMulHandles}
//console.log(genMulHandles(5))
//console.log(genHandle())