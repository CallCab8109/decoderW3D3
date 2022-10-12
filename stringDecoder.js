

// function decoder(code){
//     let newArr = []
//     console.log(code.split('0','1','2','3','4','5','6','7','8','9'))
//     // for(let i = 0; i < newArr.length; i++)

// }
// decoder('0h2xce5ngbrdy')

function decoder(code) {
    let answer = ''

    for(let i = 0; i < code.length; i++){
 
    if(!isNaN(+code[i])) {
        let n = +code[i]
        answer += code[i + 1 + n]
    }

    }

return answer
}

console.log(decoder('0h2xce5ngbrdy'))