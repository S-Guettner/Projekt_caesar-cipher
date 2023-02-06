const textInput = document.querySelector("#textInput")
const inputKey = document.querySelector("#inputKey")
const cypher = document.querySelector("#cypher")
const decrypt = document.querySelector("#decrypt")
const textOutput = document.querySelector("#textOutput")


let letterArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

let text = "hello"

const textInputArr = []
const textOutputArr = []
/* let key = 3 */
let outputArr = []

cypher.addEventListener('click', () => {
    let key = parseInt(inputKey.value)
    let text = textInput.value

for(let i = 0; i < text.length; i++){
    textInputArr.push(text.charAt(i).toUpperCase())
    console.log(textInputArr)
    /* console.log(letterArray.indexOf(textInputArr[i])) */
    textOutputArr.push(letterArray.indexOf(textInputArr[i]))
    console.log(textOutputArr)
}

textOutputArr.map((item) => {
    console.log(item)
    if(item + key > 25){
        item -= 26
    }
    outputArr.push(letterArray[item + key])
    console.log(outputArr)
    })
    textOutput.innerHTML = outputArr.join("")
})

decrypt.addEventListener('click', () => {
        let key = parseInt(inputKey.value)
        let text = textInput.value
    
    for(let i = 0; i < text.length; i++){
        textInputArr.push(text.charAt(i).toUpperCase())
        console.log(textInputArr)
        /* console.log(letterArray.indexOf(textInputArr[i])) */
        textOutputArr.push(letterArray.indexOf(textInputArr[i]))
        console.log(textOutputArr)
    }
    
    textOutputArr.map((item) => {
        console.log(item)
        if(item + key > 25){
            item -= 26
        }
        outputArr.push(letterArray[item - key])
        console.log(outputArr)
        })
        textOutput.innerHTML = outputArr.join("")
    })
