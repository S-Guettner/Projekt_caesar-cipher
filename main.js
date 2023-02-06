const textInput = document.querySelector("#textInput")
const inputKey = document.querySelector("#inputKey")
const cypher = document.querySelector("#cypher")
const decrypt = document.querySelector("#decrypt")
const textOutput = document.querySelector("#textOutput")


let letterArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

const textInputArr = []
const textOutputArr = []
const outputArr = []

cypher.addEventListener('click', () => {
    let key = parseInt(inputKey.value)
    let text = textInput.value

for(let i = 0; i < text.length; i++){
    textInputArr.push(text.charAt(i).toUpperCase())
    textOutputArr.push(letterArray.indexOf(textInputArr[i]))
}

textOutputArr.map((item) => {
    if(item + key > 25){
        item -= 26
    }
    /* item + key = cipher */
    outputArr.push(letterArray[item + key])
    })
    /* output */
    textOutput.innerHTML = outputArr.join("")
})

decrypt.addEventListener('click', () => {
        let key = parseInt(inputKey.value)
        let text = textInput.value
    
        for(let i = 0; i < text.length; i++){
        textInputArr.push(text.charAt(i).toUpperCase())
        textOutputArr.push(letterArray.indexOf(textInputArr[i]))
    }
    
    textOutputArr.map((item) => {
        console.log(item + key)
        if(item + key < 25){
            item += 26
        }
        /* item - key = decrypt */
        outputArr.push(letterArray[item - key])
        })
        /* output */
        textOutput.innerHTML = outputArr.join("")
    })
