const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
    "S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
    "o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7",
     "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
     ",","|",":",";","<",">",".","?","/"];
let totalCharacters = 12

let passwordEl1 = document.getElementById("pw1")
let passwordEl2 = document.getElementById("pw2")
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById("theme-switch")

const enableDarkmode = () => {
    console.log("darkmode")
    document.body.classList.add("darkmode")
    localStorage.setItem("darkmode", "active")
    console.log(localStorage)
}

const disableDarkmode = () => {
    console.log("remove darkmode")
    document.body.classList.remove("darkmode")
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    if (darkmode !== "active") {
        enableDarkmode()
        console.log("darkmode = active")
    }
    else {
        disableDarkmode()
    } 
})





function generatePassword() {
    let password1 = ""
    let password2 = ""
    let random1 = ""
    let random2 = ""

    for (let i = 0; i < totalCharacters + 1; i++) {
        random1 = Math.floor(Math.random() * characters.length)
        password1 += characters[random1]
    }
    for (let i = 0; i < totalCharacters + 1; i++) {
        random2 = Math.floor(Math.random() * characters.length)
        password2 += characters[random2]
    }
    passwordEl1.textContent = password1
    passwordEl2.textContent = password2   
}

