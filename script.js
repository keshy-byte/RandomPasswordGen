let passwordBox = document.getElementById("password")
let length = 15
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let numbers = "0123456789"
let symbols = "!£$%^&*_+-]{#?><"

let allCharacters = upperCase + lowerCase + symbols + numbers

function generatePassword(){
    let upperCaseRamdom = upperCase[Math.floor(Math.random()*upperCase.length)]
    let lowerCaseRandom = lowerCase[Math.floor(Math.random()*lowerCase.length)]
    let numbersRamdom = numbers[Math.floor(Math.random()*numbers.length)]
    let symbolsRamdom = symbols[Math.floor(Math.random()*symbols.length)]

    let password = ""
    password += upperCaseRamdom
    password += lowerCaseRandom
    password += symbolsRamdom
    password += numbersRamdom
    console.log(password)

    while(length > password.length){
        password += allCharacters[Math.floor(Math.random()*allCharacters.length)]
    }

    passwordBox.value= password
}