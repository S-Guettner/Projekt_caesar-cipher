let letterArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

let testInput = "Hello"

const textInputArr = []
const textOutputArr = []
let key = 3
let output = []


for(let i = 0; i < testInput.length; i++){
    textInputArr.push(testInput.charAt(i).toUpperCase())
    console.log(textInputArr)
    console.log(letterArray.indexOf(textInputArr[i]))
    textOutputArr.push(letterArray.indexOf(textInputArr[i]))
    console.log(textOutputArr)
}

textOutputArr.map((item) => {
    if(item + key > 25){
        item - 25
    }
    output.push(letterArray[item + key])
    console.log(output)
})